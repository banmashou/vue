/**
 *  @description markdown 类型声明
 */

declare namespace toastui {
    class Editor {
        constructor(options: any)
        getMarkdown: () => string
        getHTML: () => string
        on: (event: string, callback: Function) => void
        removeHook: (type: string) => void
        addHook: (type: string, handler: Function) => void
        setHeight: (height: string) => void
        focus: () => void
    }
}

/**
 * @description wangEditor 类型声明
 * @class wangEditor
 */
declare class wangEditor {
    constructor(el: string)
    create: () => void
    config: { [key: string]: any }
    txt: { [key: string]: any }
}
