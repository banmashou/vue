interface Menu {
    title?: string
    icon?: string
    isClick?: boolean
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
