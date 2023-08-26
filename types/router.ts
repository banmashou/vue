// typings.d.ts or router.ts
import 'vue-router'
import { IMenu } from '#/menu'

// 路由元信息
declare module 'vue-router' {
    interface RouteMeta {
        auth?: boolean
        guest?: boolean
        // 访问权限
        permissions?: string[]
        menu?: IMenu
        // 进入动画
        enterClass?: string
        // 离开动画
        leaveClass?: string
    }
}
