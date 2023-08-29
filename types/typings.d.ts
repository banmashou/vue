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
