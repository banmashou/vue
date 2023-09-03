import { CacheEnum } from '@/enum/cacheEnum'
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
        if (to.meta.auth && !this.token()) return { name: 'login' }
        if (to.meta.guest && this.token()) return from
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
}

export default (router: Router) => {
    new Guard(router).run()
}
