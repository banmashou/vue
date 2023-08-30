<script setup lang="ts"></script>

<template>
    <router-link to="/" class="bm-link">网站首页</router-link>
    <router-link to="/" class="bm-link">会员注册</router-link>
    <router-link to="/" class="bm-link">找回密码</router-link>
</template>

<style lang="scss">
.bm-link {
    @apply text-xs text-gray-700 hover:text-violet-700 cursor-pointer;
}
</style>
