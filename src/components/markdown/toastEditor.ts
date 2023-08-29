import uploadApi from '@/apis/uploadApi'
export default class {
    editor: toastui.Editor
    /**
     * @description markdown
     * @param el HTMLElement
     * @param	initialEditType 风格
     * @param height 高度
     * @param initialValue 初始值
     */
    constructor(el: string, initialValue: string, height: string) {
        this.editor = new toastui.Editor({
            el: document.querySelector(el),
            initialEditType: 'markdown',
            previewStyle: 'vertical',
            height: height,
            initialValue: initialValue,
        })
        this.ImageHook()
    }
    private ImageHook() {
        this.editor.removeHook('addImageBlobHook')
        this.editor.addHook('addImageBlobHook', async (blob: File, callback: Function) => {
            const form = new FormData()
            form.append('file', blob, blob.name)
            const response = await uploadApi.uploadImage(form)

            callback(response.data.url, blob.name)
        })
    }
}
