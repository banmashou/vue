// typings.d.ts or router.ts
import 'vue-router'

// 路由元信息
declare module 'vue-router' {
    interface RouteMeta {
        auth?: boolean
        guest?: boolean
        // 路由是否在菜单中显示
        show?: boolean
        // 菜单标题
        title?: string
        // 菜单图标
        icon?: string
        // 菜单是否被选中
        isClick?: boolean
    }
}
