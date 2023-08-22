import { CacheEnum } from '@/enum/cacheEnum'
import store from './store'
import userApi, { ILoginData } from '@/apis/userApi'
import router from '@/router'
import userStore from '@/store/userStore'

/**
 * @description: 登录
 * @export
 * @param {ILoginData} values 登录参数
 */
export async function login(values: ILoginData) {
    const {
        data: { token },
    } = await userApi.login(values)
    store.set(CacheEnum.TOKEY_NAME, { token }, 10)
    const routeName = store.get(CacheEnum.REDIRECT_ROUTE_NAME) ?? 'home'
    router.push({ name: routeName })
}

/**
 * @description: 退出登录
 * @export
 */
export function logout() {
    store.remove(CacheEnum.TOKEY_NAME)
    router.push('/')
    userStore().info = null
}
