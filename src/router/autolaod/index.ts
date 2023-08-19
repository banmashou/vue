import { env } from '@/utils'
import getRoutes from './view'
import { RouteRecordRaw } from 'vue-router'
import autoloadModuleRoutes from './module'
let routes = [] as RouteRecordRaw[]
// 判断是否开启自动加载路由
if (env.VITE_ROUTER_AUTOLOAD) {
    routes = getRoutes()
} else {
    routes = autoloadModuleRoutes()
}

export default routes
