export default class {
    editor: wangEditor
    constructor(el: string, callback: Function, config: { [key: string]: any }) {
        this.editor = new wangEditor(el)
        this.editor.config.height = config.height // 设置编辑区域高度

        // 配置 onchange 回调函数
        this.editor.config.onchange = callback

        this.editor.create()

        this.editor.txt.html(config.modelValue) // 重新设置编辑器内容
    }
}
