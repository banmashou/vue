import { RouteRecordRaw } from 'vue-router'

// 遍历 layouts 目录下的所有 .vue 文件
const layouts = import.meta.glob('../layouts/*.vue')
const views = import.meta.glob('../views/**/*.vue')

function getRoutes() {
    const layoutRoutes = [] as RouteRecordRaw[]
    // 通过 Object.entries() 方法返回一个给定对象自身可枚举属性的键值对数组
    Object.entries(layouts).forEach(([file, module]) => {
        const route = getRouteByModule(file, module)
        route.children = getChildrenRoutes(route)
        layoutRoutes.push(route)
    })
    return layoutRoutes
}

/**
 * @description: 获取布局路由的子路由
 *
 * @param {RouteRecordRaw} layoutRoute
 */
function getChildrenRoutes(layoutRoute: RouteRecordRaw) {
    const routes = [] as RouteRecordRaw[]
    Object.entries(views).forEach(([file, module]) => {
        if (file.includes(`../views/${layoutRoute.name as string}`)) {
            const route = getRouteByModule(file, module)
            routes.push(route)
        }
    })
    return routes
}

function getRouteByModule(file: string, module: { [key: string]: any }) {
    const name = file.replace(/.+layouts\/|\.vue/gi, '')
    const route = {
        name,
        path: `/${name}`,
        component: module.default,
    } as RouteRecordRaw

    return route
}

export default getRoutes()
