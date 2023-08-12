import { store } from '@/utils'
import { RouteLocationNormalized, Router } from 'vue-router'

/**
 * @description 路由守卫
 *
 * @class Guard
 */
class Guard {
    constructor(private router: Router) {}

    public run() {
        this.router.beforeEach((to, from) => {
            let token = store.get('token')?.token
            if (this.isLogin(to, token) === false) return { name: 'login' }
        })
    }

    /**
     * @description 是否登录
     *
     * @private
     * @memberof Guard
     */
    private isLogin(route: RouteLocationNormalized, token: any) {
        return Boolean(!route.meta.auth || (route.meta.auth && token))
    }
}

export default (router: Router) => {
    new Guard(router).run()
}
