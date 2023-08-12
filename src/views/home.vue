<script setup lang="ts"></script>

<template>
    <div class="h-screen w-screen bg-gray-700 flex flex-col justify-center items-center">
        <img src="/images/bm.jpg" class="w-52 h-52 object-cover rounded-full border-8 border-white mb-5" />
        <router-link :to="{ name: 'admin' }" class="bm-button">后台管理</router-link>
        <div class="text-gray-200 text-sm font-mono tracking-[5px] border-spacing-1 drop-shadow-md mt-3">
            欢迎使用斑马兽前端脚手架
        </div>
    </div>
</template>

<style lang="scss"></style>

<script lang="ts">
export default {
    route: { name: 'home' },
}
</script>
