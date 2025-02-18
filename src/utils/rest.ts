import camelcaseKeys from 'camelcase-keys'
import { isPlainObject } from 'lodash-es'
import {
  extend,
  RequestMethod,
  RequestOptionsInit,
  RequestOptionsWithResponse,
} from 'umi-request'
import { router } from '../router/router'
import { getToken } from './auth'

class RESTManagerStatic {
  private _$$instance: RequestMethod = null!
  get instance() {
    return this._$$instance
  }

  get endpoint() {
    const url =
      window.injectData.BASE_API ||
      (import.meta.env.VITE_APP_BASE_API as string)
    return url.endsWith('/') ? url.slice(0, -1) : url
  }

  constructor() {
    this._$$instance = extend({
      prefix: this.endpoint,
      timeout: 10000,
      errorHandler: async (error) => {
        const Message = window.message
        if (error.request && !error.response) {
          Message.error('网络错误')
          return
        }

        if (error.response) {
          if (process.env.NODE_ENV === 'development') {
            console.log(error.response)
            console.dir(error.response)
          }
          try {
            const json = await error.response.json()
            const message = json.message
            if (Array.isArray(message)) {
              message.forEach((m) => {
                Message.error(m)
              })
            } else {
              Message.error(message)
            }
          } catch (e) {
            // Message.error('出错了, 请查看控制台')
            console.log(e)
          }

          if (error?.response?.status === 401) {
            router.push('/login')
          }
          return Promise.reject(error)
        }
      },
    })
  }
  request(method: Method, route: string, options: RequestOptionsWithResponse) {
    return this._$$instance[method](route, options)
  }

  get api() {
    return buildRoute(this)
  }
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {}
const methods = ['get', 'post', 'delete', 'patch', 'put']
const reflectors = [
  'toString',
  'valueOf',
  'inspect',
  'constructor',
  Symbol.toPrimitive,
  Symbol.for('util.inspect.custom'),
]

function buildRoute(manager: RESTManagerStatic): IRequestHandler {
  const route = ['']
  const handler: any = {
    get(target: any, name: Method) {
      if (reflectors.includes(name)) return () => route.join('/')
      if (methods.includes(name)) {
        return async (options: RequestOptionsWithResponse) => {
          const res = await manager.request(name, route.join('/'), {
            ...options,
          })

          return Array.isArray(res) || isPlainObject(res)
            ? (() => {
                const transform = camelcaseKeys(res, { deep: true })

                return {
                  ...transform,
                  get data() {
                    return transform.data ?? transform
                  },
                }
              })()
            : res
        }
      }
      route.push(name)
      return new Proxy(noop, handler)
    },
    // @ts-ignore
    apply(target: any, _, args) {
      route.push(...args.filter((x: string) => x != null)) // eslint-disable-line eqeqeq
      return new Proxy(noop, handler)
    },
  }
  // @ts-ignore
  return new Proxy(noop, handler)
}

export const RESTManager = new RESTManagerStatic()

// @ts-ignore
if (__DEV__ && !window.api) {
  Object.defineProperty(window, 'api', {
    get() {
      return RESTManager.api
    },
  })
}

RESTManager.instance.interceptors.request.use((url, options) => {
  const token = getToken()

  if (token) {
    // @ts-ignore
    options.headers.Authorization = 'bearer ' + token
  }
  return {
    url: url + '?t=' + +new Date(),
    options: {
      ...options,

      interceptors: true,
    },
  }
}, {})

interface IRequestHandler<T = RequestOptionsInit> {
  (id?: string): IRequestHandler
  // @ts-ignore
  get<P = unknown>(options?: T): Promise<P>
  // @ts-ignore
  post<P = unknown>(options?: T): Promise<P>
  // @ts-ignore
  patch<P = unknown>(options?: T): Promise<P>
  // @ts-ignore
  delete<P = unknown>(options?: T): Promise<P>
  // @ts-ignore
  put<P = unknown>(options?: T): Promise<P>
  [key: string]: IRequestHandler
}
export type Method = 'get' | 'delete' | 'post' | 'put' | 'patch'
