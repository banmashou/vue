<script setup lang="ts">
import menuStore from '@/store/menuStore'

const menu = menuStore()
</script>

<template>
    <div class="hidden md:block bg-gray-50 p-3 border-t border-b shadow-sm" v-show="menu.historyMenu.length">
        <div class="grid grid-flow-col gap-3 justify-start">
            <div
                v-for="item of menu.historyMenu"
                class="border hover:bg-violet-600 hover:text-white duration-300 bg-white rounded-sm shadow-sm py-2 px-3 text-sm text-gray-600"
                :class="{ '!bg-violet-600 text-white': $route.name === item.route }"
            >
                <router-link :to="{ name: item.route }">{{ item.title }}</router-link>
                <i class="fas fa-times ml-1" @click="menu.removeHistoryMenu(item)"></i>
            </div>
        </div>
    </div>
</template>

<style lang="scss"></style>
