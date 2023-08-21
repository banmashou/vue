/**
 * @description localStorage 工具函数
 *
 * @interface IData
 */
export interface IData {
    data: any
    expire?: number
}

export default {
    /**
     * @description 设置本地存储
     * @param {string} key 键
     * @param {*} data 数据
     * @param {number} [expire] 过期时间，单位秒
     */
    set(key: string, data: any, expire?: number): void {
        let cache: IData = { data }
        // 如果存在过期时间
        if (expire) {
            cache.expire = new Date().getTime() + data.expire * 1000
        }
        localStorage.setItem(key, JSON.stringify(cache))
    },
    /**
     * @description 获取本地存储
     * @param {string} key 键
     * @return {*}  {*}
     */
    get(key: string): any {
        const cacheStore = localStorage.getItem(key)
        // 如果存在本地存储
        if (cacheStore) {
            const cache = JSON.parse(cacheStore)
            const expire = cache?.expire
            // 如果过期时间小于当前时间，删除本地存储
            if (expire && expire < new Date().getTime()) {
                localStorage.removeItem(key)
                return null
            }
            return cache.data
        }
        return null
    },
    /**
     * @description 删除本地存储
     * @param {string} key 键
     */
    remove(key: string) {
        localStorage.removeItem(key)
    },
}
