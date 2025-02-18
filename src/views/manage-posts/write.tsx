import SlidersH from '@vicons/fa/es/SlidersH'
import TelegramPlane from '@vicons/fa/es/TelegramPlane'
import { Icon } from '@vicons/utils'
import { HeaderActionButton } from 'components/button/rounded-button'
import { EditorToggleWrapper } from 'components/editor/universal/toggle'
import { MaterialInput } from 'components/input/material-input'
import { UnderlineInput } from 'components/input/underline-input'
import { ParseContentButton } from 'components/logic/parse-button'
import { BASE_URL } from 'constants/env'
import { useInjector } from 'hooks/use-deps-injection'
import { ContentLayout } from 'layouts/content'
import { isString } from 'lodash-es'
import { CategoryModel, TagModel } from 'models/category'
import { PostModel } from 'models/post'
import {
  NDrawer,
  NDrawerContent,
  NDynamicTags,
  NForm,
  NFormItem,
  NInput,
  NSelect,
  NSwitch,
  useMessage,
} from 'naive-ui'
import type { SelectMixedOption } from 'naive-ui/lib/select/src/interface'
import { RouteName } from 'router/name'
import { CategoryStore } from 'stores/category'
import { RESTManager } from 'utils/rest'
import { computed, defineComponent, onMounted, reactive, ref, toRaw } from 'vue'
import { useRoute, useRouter } from 'vue-router'
type PostReactiveType = {
  title: string
  text: string
  slug: string
  categoryId: string
  copyright: boolean
  tags: string[]
  hide: boolean
  summary: string
}

const PostWriteView = defineComponent(() => {
  const route = useRoute()

  const categoryStore = useInjector(CategoryStore)
  onMounted(async () => {
    await categoryStore.fetch()
  })

  const resetReactive: () => PostReactiveType = () => ({
    categoryId: categoryStore.data?.value?.[0].id ?? '',
    slug: '',
    text: '',
    title: '',
    copyright: true,
    tags: [],
    hide: false,
    summary: '',
  })

  const parsePayloadIntoReactiveData = (payload: PostModel) => {
    const raw = toRaw(data)
    const keys = Object.keys(raw)
    for (const k in payload) {
      if (keys.includes(k)) {
        data[k] = payload[k]
      }
    }
  }

  const data = reactive<PostReactiveType>(resetReactive())
  const id = computed(() => route.query.id)

  // const currentSelectCategoryId = ref('')
  const category = computed(
    () =>
      categoryStore.get(data.categoryId) ||
      categoryStore.data?.value?.[0] ||
      ({} as CategoryModel),
  )

  onMounted(async () => {
    const $id = id.value
    if ($id && typeof $id == 'string') {
      const payload = (await RESTManager.api.posts($id).get()) as any
      parsePayloadIntoReactiveData(payload.data as PostModel)
    }
  })

  const drawerShow = ref(false)

  const message = useMessage()
  const router = useRouter()
  const handleSubmit = async () => {
    if (id.value) {
      // update
      if (!isString(id.value)) {
        return
      }
      const $id = id.value as string
      await RESTManager.api.posts($id).put({
        data: {
          ...toRaw(data),
          summary:
            data.summary && data.summary.trim() != ''
              ? data.summary.trim()
              : null,
        },
      })
      message.success('修改成功')
    } else {
      // create
      await RESTManager.api.posts.post({
        data: {
          ...toRaw(data),
          summary: data.summary.trim() == '' ? null : data.summary.trim(),
        },
      })
      message.success('发布成功')
    }

    router.push({ name: RouteName.ViewPost, hash: '|publish' })
  }
  return () => (
    <ContentLayout
      title={id.value ? '修改文章' : '撰写新文章'}
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
        label="想想取个什么标题好呢~"
        value={data.title}
        onChange={(e) => {
          data.title = e
        }}
      ></MaterialInput>

      <div class={'text-gray-500 py-3'}>
        <label class="prefix">{`${BASE_URL}/${category.value.slug}/`}</label>

        <UnderlineInput
          class="ml-2"
          value={data.slug}
          onChange={(e) => {
            data.slug = e
          }}
        />
      </div>

      <EditorToggleWrapper
        loading={!!(id.value && !data.title)}
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
          <NForm>
            <NFormItem label="分类" required path="category">
              <NSelect
                placeholder="请选择"
                value={data.categoryId}
                onUpdateValue={(e) => {
                  data.categoryId = e
                }}
                options={
                  categoryStore.data.value?.map((i) => ({
                    label: i.name,
                    value: i.id,
                    key: i.id,
                  })) || []
                }
              ></NSelect>
            </NFormItem>

            <NFormItem label="标签">
              <NDynamicTags
                value={data.tags}
                onUpdateValue={(e) => {
                  data.tags.length = 0
                  data.tags.push(...e)
                }}
              >
                {{
                  input({ submit }) {
                    const Component = defineComponent({
                      setup() {
                        const tags = ref([] as SelectMixedOption[])
                        const loading = ref(false)
                        const value = ref('')
                        const selectRef = ref()
                        onMounted(async () => {
                          loading.value = true
                          // HACK auto focus
                          if (selectRef.value) {
                            selectRef.value.$el.querySelector('input').focus()
                          }
                          const { data } =
                            await RESTManager.api.categories.get<{
                              data: TagModel[]
                            }>({
                              params: { type: 'Tag' },
                            })
                          tags.value = data.map((i) => ({
                            label: i.name + ' (' + i.count + ')',
                            value: i.name,
                            key: i.name,
                          }))
                          loading.value = false
                        })
                        return () => (
                          <NSelect
                            ref={selectRef}
                            size={'small'}
                            value={value.value}
                            clearable
                            loading={loading.value}
                            filterable
                            tag
                            options={tags.value}
                            onUpdateValue={(e) => {
                              void (value.value = e)
                              submit(e)
                            }}
                          ></NSelect>
                        )
                      },
                    })

                    return <Component />
                  },
                }}
              </NDynamicTags>
            </NFormItem>

            <NFormItem label="概要">
              <NInput
                placeholder="文章概要"
                value={data.summary}
                onInput={(e) => void (data.summary = e)}
              />
            </NFormItem>

            <NFormItem
              label="隐藏"
              labelWidth={100}
              labelAlign="right"
              labelPlacement="left"
            >
              <NSwitch
                value={data.hide}
                onUpdateValue={(e) => void (data.hide = e)}
              ></NSwitch>
            </NFormItem>

            <NFormItem
              label="版权注明"
              labelWidth={100}
              labelAlign="right"
              labelPlacement="left"
            >
              <NSwitch
                value={data.copyright}
                onUpdateValue={(e) => void (data.copyright = e)}
              ></NSwitch>
            </NFormItem>
          </NForm>
        </NDrawerContent>
      </NDrawer>
    </ContentLayout>
  )
})

export default PostWriteView
