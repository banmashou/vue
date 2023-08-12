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
            //对登录有路由进行验证
            if (this.isLogin(to) === false) return { name: 'login' }
        })
    }

    /**
     * @description 是否登录
     *
     * @private
     * @memberof Guard
     */
    private isLogin(route: RouteLocationNormalized) {
        return false
    }
}

export default (router: Router) => {
    new Guard(router).run()
}
