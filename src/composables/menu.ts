import { IMenu } from '#/menu'
import { CacheEnum } from '@/enum/cacheEnum'
import router from '@/router'
import utils from '@/utils'
import { ref } from 'vue'

class Menu {
    public menus = ref<IMenu[]>([])
    public history = ref<IMenu[]>([])
    constructor() {
        this.menus.value = this.getMenuByRoute()
        this.history.value = utils.store.get(CacheEnum.HISTORY_MENU) ?? []
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
