import { http } from '@/plugins/axios'

export interface User {
    name: string
    age: number
    avatar: string
}

interface LoginInterface {
    token: string
}
class userApi {
    info() {
        return http.request<User>({
            url: `info`,
        })
    }
    login(data: any) {
        return http.request<LoginInterface>({
            url: `login`,
            method: 'POST',
            data,
        })
    }
}

export default new userApi()
