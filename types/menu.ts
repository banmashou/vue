interface Menu {
    title?: string
    icon?: string
    isClick?: boolean
    route?: string
}

/**
 * @description: 菜单类型
 * @export
 * @interface IMenu
 * @extends {Menu}
 */
export interface IMenu extends Menu {
    children?: Menu[]
}
