import { IconType } from '@icon-park/vue-next/es/all'

interface Menu {
    title?: string
    icon?: IconType
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
