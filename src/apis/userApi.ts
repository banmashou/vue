import { http } from '@/plugins/axios'

export interface User {
    name: string
    age: number
    avatar: string
}

interface LoginInterface {
    token: string
}

export interface ILoginData {
    account: string
    password: string
}
class userApi {
    /**
     * @description 获取用户信息
     *
     * @return {*}
     * @memberof userApi
     */
    info() {
        return http.request<User>({
            url: `info`,
        })
    }

    /**
     * @description 登录
     * @param {ILoginData} data 登录参数
     * @return {*}
     * @memberof userApi
     */
    login(data: ILoginData) {
        return http.request<LoginInterface>({
            url: `login`,
            method: 'POST',
            data,
        })
    }
}

export default new userApi()
