import util from '@/utils'
import getRoutes from './view'
import { RouteRecordRaw, Router } from 'vue-router'
import autoloadModuleRoutes from './module'

// 判断是否开启自动加载路由
let routes: RouteRecordRaw[] = util.env.VITE_ROUTER_AUTOLOAD ? getRoutes() : autoloadModuleRoutes()

/**
 * @description 自动加载路由
 * @param {Router} router 路由实例
 */
function autoload(router: Router) {
    routes.forEach((route) => {
        router.addRoute(route)
    })
}
export default autoload
