import { http } from '@/plugins/axios'

interface User {
    name: string
    age: number
    avatar: string
}
class userApi {
    info() {
        return http.request<User>({
            url: `info`,
        })
    }
}

export default new userApi()
