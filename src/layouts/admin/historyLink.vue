<script setup lang="ts">
import menuStore from '@/store/menuStore'

const menu = menuStore()
</script>

<template>
    <div class="hidden md:block bg-gray-50 p-3 border-t border-b shadow-sm">
        <div class="grid grid-flow-col gap-3 justify-start">
            <router-link
                :to="{ name: menus.route }"
                v-for="menus of menu.historyMenu"
                class="border hover:bg-violet-600 hover:text-white duration-300 bg-white rounded-sm shadow-sm py-2 px-3 text-sm text-gray-600"
                :class="{ '!bg-violet-600 text-white': $route.name == menus.route }"
            >
                {{ menus.title }}
                <i class="fas fa-times ml-1"></i>
            </router-link>
        </div>
    </div>
</template>

<style lang="scss"></style>
