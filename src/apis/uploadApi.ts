import { http } from '@/plugins/axios'

export interface IUploadImage {
    url: string
}

class uploadApi {
    /**
     * @description 上传图片
     * @param {File} file 图片文件
     * @return {*}
     * @memberof uploadApi
     */
    uploadImage(data: FormData) {
        return http.request<IUploadImage>({
            url: `upload/image`,
            method: 'POST',
            data,
        })
    }
}
export default new uploadApi()
