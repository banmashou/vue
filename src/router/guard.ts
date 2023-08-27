import { CacheEnum } from '@/enum/cacheEnum'
import menuStore from '@/store/menuStore'
import userStore from '@/store/userStore'
import utils from '@/utils'
import { RouteLocationNormalized, Router } from 'vue-router'

/**
 * @description 路由守卫
 *
 * @class Guard
 */
class Guard {
    constructor(private router: Router) {}

    public run() {
        this.router.beforeEach(this.beforeEach.bind(this))
    }

    /**
     * @description 路由跳转前拦截
     * @private
     * @param {RouteLocationNormalized} to
     * @param {RouteLocationNormalized} from
     * @return {*}
     * @memberof Guard
     */
    private async beforeEach(to: RouteLocationNormalized, from: RouteLocationNormalized) {
        if (this.isLogin(to) === false) return { name: 'login' }
        if (this.isGuest(to) === false) return from
    }

    /**
     * @description 获取用户信息
     * @private
     * @memberof Guard
     */
    private getUserInfo() {
        if (this.token()) return userStore().getUserInfo()
    }

    /**
     * @description 获取token
     * @private
     * @return {*}  {(string | null)}
     * @memberof Guard
     */
    private token(): string | null {
        return utils.store.get(CacheEnum.TOKEY_NAME)
    }

    /**
     * @description 游客
     *
     * @private
     * @param {RouteLocationNormalized} route
     * @param {*} token
     * @return {*}
     * @memberof Guard
     */
    private isGuest(route: RouteLocationNormalized) {
        return Boolean(!route.meta.guest || (route.meta.guest && !this.token()))
    }

    /**
     * @description 登录用户访问
     *
     * @private
     * @param {RouteLocationNormalized} route
     * @param {*} token
     * @return {*}
     * @memberof Login
     */
    private isLogin(route: RouteLocationNormalized) {
        const state = Boolean(!route.meta.auth || (route.meta.auth && this.token()))
        // 缓存重定向路由
        if (state === false) {
            utils.store.set(CacheEnum.REDIRECT_ROUTE_NAME, route.name)
        }
        return state
    }
}

export default (router: Router) => {
    new Guard(router).run()
}
