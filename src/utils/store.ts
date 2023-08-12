/**
 * @description localStorage 工具函数
 *
 * @interface IData
 */
export interface IData {
    expire?: number
    [key: string]: any
}

export default {
    // 设置本地存储
    set(key: string, data: IData): void {
        // 如果存在过期时间
        if (data.expire) {
            data.expire = new Date().getTime() + data.expire * 1000
        }
        localStorage.setItem(key, JSON.stringify(data))
    },
    // 获取本地存储
    get(key: string): IData | null {
        const item = localStorage.getItem(key)
        // 如果存在本地存储
        if (item) {
            const data = JSON.parse(item)
            const expire = data?.expire
            // 如果过期时间小于当前时间，删除本地存储
            if (expire && expire < new Date().getTime()) {
                localStorage.removeItem(key)
                return null
            }
            return data
        }
        return null
    },
}
