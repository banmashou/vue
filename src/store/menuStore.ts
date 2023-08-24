import { IMenu } from '#/menu'
import { defineStore } from 'pinia'
import router from '@/router'
import { RouteLocationNormalized } from 'vue-router'

export default defineStore('menu', {
    state: () => {
        return {
            menus: [] as IMenu[],
            historyMenu: [] as IMenu[],
        }
    },
    actions: {
        init() {
            this.getMenuByRoute()
        },
        // 添加历史菜单
        addHistoryMenu(route: RouteLocationNormalized) {
            const menu: IMenu = { ...route.meta?.menu, route: route.name as string }
            const isHas = this.historyMenu.some((menu) => menu.route === route.name)
            if (!isHas) this.historyMenu.unshift(menu)
            if (this.historyMenu.length > 10) this.historyMenu.pop()
        },
        // 根据路由获取菜单
        getMenuByRoute() {
            this.menus = router
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
        },
    },
})
