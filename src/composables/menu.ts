import { IMenu } from '#/menu'
import { CacheEnum } from '@/enum/cacheEnum'
import router from '@/router'
import utils from '@/utils'
import { ref } from 'vue'
import { RouteLocationNormalizedLoaded } from 'vue-router'

/**
 * @description 菜单
 * @class Menu
 */
class Menu {
    public menus = ref<IMenu[]>([])
    public history = ref<IMenu[]>([])
    public close = ref(true)

    constructor() {
        this.menus.value = this.getMenuByRoute()
        this.history.value = utils.store.get(CacheEnum.HISTORY_MENU) ?? []
    }

    /**
     * @description 切换菜单栏的状态
     * @memberof Menu
     */
    toggleState() {
        this.close.value = !this.close.value
    }

    /**
     * @description 设置当前菜单
     * @param {RouteLocationNormalized} route
     * @memberof Menu
     */
    setCurrentMenu(route: RouteLocationNormalizedLoaded) {
        this.menus.value.forEach((m) => {
            m.isClick = false
            m.children?.forEach((c) => {
                c.isClick = false
                if (c.route === route.name) {
                    m.isClick = true
                    c.isClick = true
                }
            })
        })
    }

    // 根据路由获取菜单
    getMenuByRoute() {
        return router
            .getRoutes()
            .filter((route) => route.children.length && route.meta.menu)
            .map((route) => {
                let menu: IMenu = { ...route.meta?.menu }
                menu.children = route.children
                    .filter((route) => route.meta?.menu)
                    .map((route) => {
                        return { ...route.meta?.menu, route: route.name }
                    }) as IMenu[]
                return menu
            })
            .filter((menu) => menu.children?.length)
    }
}

export default new Menu()
