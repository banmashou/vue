<script setup lang="ts">
import menuService from '@/composables/menu'
</script>

<template>
    <div class="hidden md:block bg-gray-50 p-3 border-t border-b shadow-sm" v-show="menuService.history.value.length">
        <div class="grid grid-flow-col gap-3 justify-start">
            <div
                v-for="item of menuService.history.value"
                class="border hover:bg-violet-600 hover:text-white duration-300 bg-white rounded-sm shadow-sm py-2 px-3 text-sm text-gray-600 flex justify-between items-center cursor-pointer"
                :class="{ '!bg-violet-600 text-white': $route.name === item.route }"
            >
                <router-link :to="{ name: item.route }">{{ item.title }}</router-link>
                <icon-close-small
                    theme="outline"
                    size="18"
                    class="ml-2"
                    :class="{ 'text-white': $route.name === item.route }"
                    @click="menuService.removeHistoryMenu(item)"
                />
            </div>
        </div>
    </div>
</template>

<style lang="scss"></style>
