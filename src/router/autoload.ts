import { RouteRecordRaw } from 'vue-router'

const layouts = import.meta.glob('../layouts/*.vue')

console.log('layouts', layouts)

// 通过 Object.entries() 方法返回一个给定对象自身可枚举属性的键值对数组
Object.entries(layouts).forEach(([file, module]) => {
    // console.log(module)
    const route = getRouteByModule(file, module)
})

function getRouteByModule(file: string, module: { [key: string]: any }) {
    console.log('file', file)
    console.log('module', module)
}

const layoutRoutes = [] as RouteRecordRaw[]

export default layoutRoutes
