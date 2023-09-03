<script setup lang="ts">
import utils from '@/utils'
</script>

<template>
    <div class="h-screen w-screen bg-gray-700 flex flex-col justify-center items-center">
        <img src="/images/bm.jpg" class="w-40 h-40 object-cover rounded-full border-8 border-white mb-5" />
        <div>
            <router-link :to="{ name: 'admin.home' }" class="bm-button">后台管理</router-link>
            <router-link v-if="!utils.user.isLogin()" :to="{ name: 'login' }" class="bm-button ml-3 bm-danger"
                >用户登录</router-link
            >
        </div>
        <div class="text-gray-300 text-xs font-mono drop-shadow-md mt-6">欢迎使用斑马兽前端脚手架</div>
    </div>
</template>
