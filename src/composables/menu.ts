import { IMenu } from '#/menu'
import { CacheEnum } from '@/enum/cacheEnum'
import router from '@/router'
import utils from '@/utils'
import { ref } from 'vue'
import { RouteLocationNormalized, RouteLocationNormalizedLoaded, RouteRecordRaw } from 'vue-router'

/**
 * @description 菜单
 * @class Menu
 */
class Menu {
    public menus = ref<IMenu[]>([])
    public history = ref<IMenu[]>([])
    public close = ref(false)
    public route = ref(null as null | RouteLocationNormalized)

    constructor() {
        this.menus.value = this.getMenuByRoute()
        this.history.value = this.getHistoryMenu()
    }

    /**
     * @description 获取历史菜单
     * @private
     * @return {*}
     * @memberof Menu
     */
    private getHistoryMenu() {
        const routes = [] as RouteRecordRaw[]
        router.getRoutes().map((r) => routes.push(...r.children))

        let menus: IMenu[] = utils.store.get(CacheEnum.HISTORY_MENU) ?? []
        return menus.filter((m) => {
            return routes.some((r) => r.name === m.route)
        })
    }

    /**
     * @description 添加历史菜单
     * @param {RouteLocationNormalized} route
     * @memberof Menu
     */
    addHistoryMenu(route: RouteLocationNormalized) {
        if (!route.meta?.menu) return
        this.route.value = route
        const menu: IMenu = { ...route.meta?.menu, route: route.name as string }
        const isHas = this.history.value.some((menu) => menu.route === route.name)
        if (!isHas) this.history.value.unshift(menu)
        if (this.history.value.length > 10) this.history.value.pop()

        utils.store.set(CacheEnum.HISTORY_MENU, this.history.value)
    }

    /**
     * @description 删除历史菜单
     * @param {IMenu} menu
     * @memberof Menu
     */
    removeHistoryMenu(menu: IMenu) {
        const index = this.history.value.indexOf(menu)
        this.history.value.splice(index, 1)
    }

    /**
     * @description 切换菜单栏的状态
     * @param {IMenu} menu
     * @memberof Menu
     */
    toggleParentMenu(menu: IMenu) {
        this.menus.value.forEach((m) => {
            m.isClick = false
            if (m === menu) m.isClick = true
        })
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
