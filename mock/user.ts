import { Random } from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'
export default [
    {
        url: '/api/info',
        method: 'get',
        response: () => {
            return {
                code: 0,
                message: '请求成功',
                type: 'success',
                data: {
                    name: '斑马兽呀',
                    avatar: '/images/bm.jpg',
                    age: 18,
                },
            }
        },
    },
    {
        url: '/api/login',
        method: 'post',
        response: () => {
            return {
                code: 200,
                message: '登录成功',
                type: 'success',
                data: {
                    token: Random.string(32),
                },
            }
        },
    },
] as MockMethod[]
