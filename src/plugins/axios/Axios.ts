import { CacheEnum } from '@/enum/cacheEnum'
import store from '@/utils/store'
import axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios'

/**
 * @description axios封装
 *
 * @class Axios
 */
export default class Axios {
    private instance
    constructor(config: AxiosRequestConfig) {
        this.instance = axios.create(config)

        this.interceptors()
    }

    public request<T, D = RespinseResult<T>>(config: AxiosRequestConfig) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await this.instance.request<D>(config)
                resolve(response.data)
            } catch (error) {
                reject(error)
            }
        }) as Promise<D>
    }

    private interceptors() {
        this.interceptorsRequest()
        this.interceptorsResponse()
    }

    // 请求拦截器
    private interceptorsRequest() {
        this.instance.interceptors.request.use(
            (config) => {
                config.headers = {
                    Authorization: 'Bearer ' + store.get(CacheEnum.TOKEY_NAME),
                } as AxiosRequestHeaders

                return config
            },
            (error) => {
                return Promise.reject(error)
            },
        )
    }

    // 响应拦截器
    private interceptorsResponse() {
        axios.interceptors.response.use(
            (response) => {
                return response
            },
            (error) => {
                return Promise.reject(error)
            },
        )
    }
}
