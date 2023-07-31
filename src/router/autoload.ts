import { RouteRecordRaw } from 'vue-router'

// 遍历 layouts 目录下的所有 .vue 文件
const layouts = import.meta.glob('../layouts/*.vue')

console.log('layouts', layouts)

// 通过 Object.entries() 方法返回一个给定对象自身可枚举属性的键值对数组
Object.entries(layouts).forEach(([file, module]) => {
    // console.log(module)
    const route = getRouteByModule(file, module)
})

function getRouteByModule(file: string, module: { [key: string]: any }) {
    const name = file.replace(/.+layouts\/|\.vue/gi, '')
    const route = {
        name,
        path: `/${name}`,
        component: module.default,
    } as RouteRecordRaw

    console.log('route', route)
}

const layoutRoutes = [] as RouteRecordRaw[]

export default layoutRoutes
