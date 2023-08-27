/**
 * @description 根据模块注册路由
 *
 * @export
 */
import { RouteRecordRaw } from 'vue-router'
export default function autoloadModuleRoutes() {
    const modules: Record<string, any> = import.meta.glob('../modules/**/*.ts', { eager: true })
    const routes = [] as RouteRecordRaw[]
    Object.keys(modules).forEach((key) => {
        routes.push(modules[key].default)
    })
    return routes
}
