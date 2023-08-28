export default class {
    editor
    constructor(el: string, height: string, initialValue: string) {
        this.editor = new toastui.Editor({
            el: document.querySelector(el),
            previewStyle: 'vertical',
            height: height,
            initialValue: initialValue,
        })
    }
}
