import axios, { AxiosRequestConfig } from 'axios'

/**
 * @description axios实例
 *
 * @class Axios
 */
class Axios {
    private instance
    constructor(config: AxiosRequestConfig) {
        this.instance = axios.create(config)

        this.interceptors()
    }

    public request() {}

    private interceptors() {
        this.interceptorsRequest()
        this.interceptorsResponse()
    }

    // 请求拦截器
    private interceptorsRequest() {
        this.instance.interceptors.request.use(
            (config) => {
                // 在发送请求之前做些什么
                return config
            },
            (error) => {
                // 对请求错误做些什么
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
