import util from '@/utils'
import getRoutes from './view'
import { RouteRecordRaw, Router } from 'vue-router'
import autoloadModuleRoutes from './module'
import userStore from '@/store/userStore'

// 判断是否开启自动加载路由
let routes: RouteRecordRaw[] = util.env.VITE_ROUTER_AUTOLOAD ? getRoutes() : autoloadModuleRoutes()

/**
 * @description 自动加载路由
 * @param {Router} router 路由实例
 */
function autoload(router: Router) {
    const user = userStore()

    // 过滤没有权限的路由
    routes = routes.map((route) => {
        route.children = route.children?.filter((r) => {
            const permission = r.meta?.permission
            return permission ? user.info?.permissions?.includes(permission) : true
        })
        return route
    })
}
export default autoload
