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
                    name: '斑马兽',
                    avatar: '/avatar/bm.jpg',
                    age: 18,
                },
            }
        },
    },
] as MockMethod[]
