import { defineStore } from 'pinia'

export const router = defineStore('router', {
    state: () => {
        return {
            bm: '斑马兽',
        }
    },
    getters: {
        get(state) {
            return state.bm
        },
    },
})
