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
    }
}
