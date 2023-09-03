import { MockMethod } from 'vite-plugin-mock'
export default [
    {
        url: '/api/upload/image',
        method: 'post',
        response: () => {
            return {
                code: 0,
                message: '上传成功',
                status: 'success',
                data: {
                    url: '/images/bm.jpg',
                },
            }
        },
    },
] as MockMethod[]
