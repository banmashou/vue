import { Router } from 'vue-router'

/**
 * @description 路由守卫
 *
 * @class Guard
 */
class Guard {
    constructor(private router: Router) {}
    public run() {
        this.router.beforeEach((to, from) => {})
    }
}

export default (router: Router) => {
    new Guard(router).run()
}
