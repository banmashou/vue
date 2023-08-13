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
            if (this.isGuest(to, token) === false) return from
        })
    }

    /**
     * @description 游客登录拦截
     *
     * @private
     * @param {RouteLocationNormalized} route
     * @param {*} token
     * @return {*}
     * @memberof Guard
     */
    private isGuest(route: RouteLocationNormalized, token: any) {
        return Boolean(!route.meta.guest || (route.meta.guest && !token))
    }

    /**
     * @description 当前用户登录拦截
     *
     * @private
     * @param {RouteLocationNormalized} route
     * @param {*} token
     * @return {*}
     * @memberof Login
     */
    private isLogin(route: RouteLocationNormalized, token: any) {
        return Boolean(!route.meta.auth || (route.meta.auth && token))
    }
}

export default (router: Router) => {
    new Guard(router).run()
}
