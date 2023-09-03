import userApi, { User } from '@/apis/userApi'
import { CacheEnum } from '@/enum/cacheEnum'
import store from '@/utils/store'
import { defineStore } from 'pinia'

export default defineStore('user', {
    state: () => {
        return {
            info: {} as null | User,
        }
    },
    actions: {
        async getUserInfo() {
            if (store.get(CacheEnum.TOKEY_NAME)) {
                const res = await userApi.info()
                this.info = res.data
            }
        },
    },
})
