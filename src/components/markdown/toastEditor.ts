import uploadApi from '@/apis/uploadApi'
import Editor from '@toast-ui/editor'
import '@toast-ui/editor/dist/toastui-editor.css'
export default class {
    editor: Editor
    isFullscreen: boolean = false

    /**
     * @description markdown
     * @param el HTMLElement
     * @param	initialEditType 编辑器风格
     * @param height 高度
     * @param initialValue 初始值
     */
    constructor(el: string, initialValue: string, public height: string) {
        this.editor = new Editor({
            el: document.querySelector(el)!,
            initialEditType: 'markdown',
            previewStyle: 'vertical',
            height: height,
            initialValue: initialValue,
            toolbarItems: this.toolbar() as [],
        })
        this.ImageHook()
    }

    /**
     * @description 自定义工具
     * @private
     */
    private toolbar() {
        return [
            ['heading', 'bold', 'italic', 'strike'],
            ['hr', 'quote'],
            ['ul', 'ol', 'task', 'indent', 'outdent'],
            ['table', 'image', 'link'],
            ['code', 'codeblock'],
            [
                {
                    el: this.fullscreen(),
                    command: 'fullscreen',
                    tooltip: 'fullscreen',
                },
            ],
        ]
    }

    /**
     * @description 全屏
     * @private
     */
    private fullscreen() {
        const button = document.createElement('button') as HTMLButtonElement
        button.innerHTML = '全屏'
        button.style.margin = '0'

        // 全屏事件
        button.addEventListener('click', () => {
            this.editor.setHeight('100vh')
            this.toggleFullscreen()
        })

        // esc退出全屏
        document.documentElement.addEventListener('keyup', (event: KeyboardEvent) => {
            if (event.key === 'Escape' && this.isFullscreen) {
                this.toggleFullscreen()
            }
        })

        return button
    }

    /**
     * @description 切换全屏
     * @private
     */
    private toggleFullscreen() {
        const ui = document.querySelector('.toastui-editor-defaultUI') as HTMLDivElement
        ui.classList.toggle('fullscreen')
        this.isFullscreen = !this.isFullscreen
        if (this.isFullscreen === false) {
            this.editor.setHeight(this.height)
        } else {
            this.editor.setHeight('100vh')
        }
        this.editor.focus()
    }

    /**
     * @description 图片上传
     * @private
     */
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
