import SlidersH from '@vicons/fa/es/SlidersH'
import TelegramPlane from '@vicons/fa/es/TelegramPlane'
import { Icon } from '@vicons/utils'
import { HeaderActionButton } from 'components/button/rounded-button'
import { EditorToggleWrapper } from 'components/editor/universal/toggle'
import { MaterialInput } from 'components/input/material-input'
import { GetLocationButton } from 'components/location/get-location-button'
import { SearchLocationButton } from 'components/location/search-button'
import { ParseContentButton } from 'components/logic/parse-button'
import { BASE_URL } from 'constants/env'
import { MOOD_SET, WEATHER_SET } from 'constants/note'
import { add } from 'date-fns/esm'
import { useAutoSave, useAutoSaveInEditor } from 'hooks/use-auto-save'
import { useParsePayloadIntoData } from 'hooks/use-parse-payload'
import { ContentLayout } from 'layouts/content'
import { isString } from 'lodash-es'
import { Coordinate, NoteModel, NoteMusicRecord } from 'models/note'
import {
  NButton,
  NButtonGroup,
  NDatePicker,
  NDrawer,
  NDrawerContent,
  NDynamicTags,
  NForm,
  NFormItem,
  NInput,
  NSelect,
  NSpace,
  NSwitch,
  useMessage,
} from 'naive-ui'
import { RouteName } from 'router/name'
import { RESTManager } from 'utils/rest'
import { getDayOfYear } from 'utils/time'
import {
  computed,
  defineComponent,
  onBeforeMount,
  onMounted,
  reactive,
  ref,
  toRaw,
  watch,
} from 'vue'
import { useRoute, useRouter } from 'vue-router'
type NoteReactiveType = {
  title: string
  text: string
  hide: boolean
  mood: string
  weather: string
  password: string | null
  secret: Date | null
  hasMemory: boolean
  music: NoteMusicRecord[]
  location: null | string
  coordinates: null | Coordinate
}

const NoteWriteView = defineComponent(() => {
  const route = useRoute()

  const defaultTitle = ref('写点什么呢')
  const id = computed(() => route.query.id)

  onBeforeMount(() => {
    if (id.value) {
      return
    }
    const currentTime = new Date()
    defaultTitle.value = `记录 ${currentTime.getFullYear()} 年第 ${getDayOfYear(
      currentTime,
    )} 天`
  })

  const resetReactive: () => NoteReactiveType = () => ({
    text: '',
    title: '',
    hide: false,
    hasMemory: false,
    mood: '',
    music: [],
    password: null,
    secret: null,
    weather: '',
    location: '',
    coordinates: null,
  })

  const parsePayloadIntoReactiveData = (payload: NoteModel) =>
    useParsePayloadIntoData(data)(payload)
  const data = reactive<NoteReactiveType>(resetReactive())
  const nid = ref<number>()

  const loading = computed(() => !!(id.value && !data.title))

  const disposer = watch(
    () => loading.value,
    (loading) => {
      if (loading) {
        return
      }

      const autoSaveHook = useAutoSave(
        'note-' + (id.value || 'new'),
        3000,
        () => ({
          text: data.text,
          title: data.title,
        }),
      )

      useAutoSaveInEditor(data, autoSaveHook)
      requestAnimationFrame(() => {
        disposer()
      })
    },
    { immediate: true },
  )

  onMounted(async () => {
    const $id = id.value
    if ($id && typeof $id == 'string') {
      const payload = (await RESTManager.api.notes($id).get({
        params: {
          single: true,
        },
      })) as any

      const data = payload.data
      nid.value = data.nid
      data.secret = data.secret ? new Date(data.secret) : null

      const created = new Date((data as any).created)
      defaultTitle.value = `记录 ${created.getFullYear()} 年第 ${getDayOfYear(
        created,
      )} 天`

      parsePayloadIntoReactiveData(data as NoteModel)
    }
  })

  const drawerShow = ref(false)

  const message = useMessage()
  const router = useRouter()

  const enablePassword = computed(() => typeof data.password === 'string')

  const handleSubmit = async () => {
    const parseDataToPayload = (): { [key in keyof NoteModel]?: any } => {
      return {
        ...toRaw(data),
        title:
          data.title && data.title.trim()
            ? data.title.trim()
            : defaultTitle.value,
        password:
          data.password && data.password.length > 0 ? data.password : null,
        secret: data.secret
          ? (() => {
              const date = new Date(data.secret)
              if (+date - +new Date() <= 0) {
                return null
              } else {
                return date
              }
            })()
          : null,
        music: data.music,
      }
    }
    if (id.value) {
      // update
      if (!isString(id.value)) {
        return
      }
      const $id = id.value as string
      await RESTManager.api.notes($id).put({
        data: parseDataToPayload(),
      })
      message.success('修改成功')
    } else {
      // create
      await RESTManager.api.notes.post({
        data: parseDataToPayload(),
      })
      message.success('发布成功')
    }

    router.push({ name: RouteName.ViewNote, hash: '|publish' })
  }

  return () => (
    <ContentLayout
      title={'树洞'}
      actionsElement={
        <>
          <ParseContentButton data={data} />

          <HeaderActionButton
            icon={<TelegramPlane />}
            onClick={handleSubmit}
          ></HeaderActionButton>
        </>
      }
      footerButtonElement={
        <>
          <button
            onClick={() => {
              drawerShow.value = true
            }}
          >
            <Icon>
              <SlidersH />
            </Icon>
          </button>
        </>
      }
    >
      <MaterialInput
        class="mt-3 relative z-10"
        label={defaultTitle.value}
        value={data.title}
        onChange={(e) => {
          data.title = e
        }}
      ></MaterialInput>

      <div class={'text-gray-500 py-3'}>
        <label>{`${BASE_URL}/notes/${nid.value ?? ''}`}</label>
      </div>

      <EditorToggleWrapper
        loading={loading.value}
        onChange={(v) => {
          data.text = v
        }}
        text={data.text}
      />

      {/* Drawer  */}

      <NDrawer
        show={drawerShow.value}
        width={450}
        style={{ maxWidth: '90vw' }}
        placement="right"
        onUpdateShow={(s) => {
          drawerShow.value = s
        }}
      >
        <NDrawerContent title="文章设定">
          {/* @ts-ignore */}
          <NForm name="note-options">
            <NFormItem label="心情" required>
              <NSelect
                value={data.mood}
                filterable
                tag
                options={MOOD_SET.map((i) => ({ label: i, value: i }))}
                onUpdateValue={(e) => void (data.mood = e)}
              ></NSelect>
            </NFormItem>
            <NFormItem label="天气" required>
              <NSelect
                value={data.weather}
                filterable
                tag
                options={WEATHER_SET.map((i) => ({ label: i, value: i }))}
                onUpdateValue={(e) => void (data.weather = e)}
              ></NSelect>
            </NFormItem>

            <NFormItem label="获取当前地址" labelPlacement="left">
              <NSpace vertical>
                <NButtonGroup>
                  <GetLocationButton
                    onChange={(amap, coordinates) => {
                      data.location = amap.formattedAddress
                      data.coordinates = {
                        longitude: coordinates[0],
                        latitude: coordinates[1],
                      }
                    }}
                  />
                  <SearchLocationButton
                    placeholder={data.location}
                    onChange={(locationName, coo) => {
                      data.location = locationName
                      data.coordinates = coo
                    }}
                  />

                  <NButton
                    round
                    disabled={!data.location}
                    onClick={() => {
                      data.location = ''
                      data.coordinates = null
                    }}
                  >
                    清楚
                  </NButton>
                </NButtonGroup>

                <NSpace vertical>
                  <span>{data.location}</span>
                  {data.coordinates && (
                    <span>
                      {data.coordinates.longitude}, {data.coordinates.latitude}
                    </span>
                  )}
                </NSpace>
              </NSpace>
            </NFormItem>

            <NFormItem
              label="设定密码?"
              labelAlign="right"
              labelPlacement="left"
            >
              <NSwitch
                value={enablePassword.value}
                onUpdateValue={(e) => {
                  if (e) {
                    data.password = ''
                  } else {
                    data.password = null
                  }
                }}
              />
            </NFormItem>
            {enablePassword.value && (
              <NFormItem label="输入密码">
                <NInput
                  disabled={!enablePassword.value}
                  placeholder=""
                  type="password"
                  value={data.password}
                  inputProps={{
                    name: 'note-password',
                    autocapitalize: 'off',
                    autocomplete: 'new-password',
                  }}
                  onInput={(e) => void (data.password = e)}
                ></NInput>
              </NFormItem>
            )}
            <NFormItem
              label="多久之后公开"
              labelWidth={'50%'}
              labelAlign="right"
              labelPlacement="left"
            >
              <NDatePicker
                type="datetime"
                isDateDisabled={(ts: number) => +new Date(ts) - +new Date() < 0}
                placeholder="选择时间"
                // @ts-expect-error
                value={data.secret}
                onUpdateValue={(e) => {
                  data.secret = e ? new Date(e) : null
                }}
              >
                {{
                  footer: () => {
                    const date = new Date()
                    return (
                      <NSpace>
                        <NButton
                          round
                          type="default"
                          size="small"
                          onClick={() => {
                            data.secret = add(date, { days: 1 })
                          }}
                        >
                          一天后
                        </NButton>
                        <NButton
                          round
                          type="default"
                          size="small"
                          onClick={() => {
                            data.secret = add(date, { weeks: 1 })
                          }}
                        >
                          一周后
                        </NButton>
                        <NButton
                          round
                          type="default"
                          size="small"
                          onClick={() => {
                            data.secret = add(date, { days: 14 })
                          }}
                        >
                          半个月后
                        </NButton>
                        <NButton
                          round
                          type="default"
                          size="small"
                          onClick={() => {
                            data.secret = add(date, { months: 1 })
                          }}
                        >
                          一个月后
                        </NButton>
                      </NSpace>
                    )
                  },
                }}
              </NDatePicker>
            </NFormItem>

            <NFormItem
              label="隐藏"
              labelWidth={'50%'}
              labelAlign="right"
              labelPlacement="left"
            >
              <NSwitch
                value={data.hide}
                onUpdateValue={(e) => void (data.hide = e)}
              ></NSwitch>
            </NFormItem>

            <NFormItem
              label="是否存在回忆, 日后需要重温?"
              labelAlign="right"
              labelPlacement="left"
              labelWidth={'50%'}
            >
              <NSwitch
                value={data.hasMemory}
                onUpdateValue={(e) => void (data.hasMemory = e)}
              ></NSwitch>
            </NFormItem>

            <NFormItem label="音乐 (网易云 ID)">
              <NDynamicTags
                value={data.music.map((i) => i.id)}
                onUpdateValue={(e) => {
                  data.music = e.map((id) => ({ type: 'netease', id }))
                }}
              ></NDynamicTags>
            </NFormItem>
          </NForm>
        </NDrawerContent>
      </NDrawer>
      {/* Drawer END */}
    </ContentLayout>
  )
})

export default NoteWriteView
