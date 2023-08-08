<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({
    account: 'abc',
    password: '123',
})
</script>

<template>
    <div class="bg-slate-300 h-screen flex justify-center items-center p-5">
        <div class="w-[720px] bg-white md:grid grid-cols-2 rounded-md shadow-md overflow-hidden">
            <div class="p-6">
                <h2 class="text-center text-gray-700 text-lg mt-3">会员登录</h2>
                <div class="mt-8">
                    <bmInput v-model="form.account" placeholder="请输入手机号或邮箱" />
                    <bmInput v-model="form.password" placeholder="请输入登录密码" class="mt-3" />
                </div>
                <bmButton class="mt-5" />
                <div class="flex gap-2 justify-center mt-5">
                    <bmLink />
                </div>
            </div>
            <div class="hidden md:block">
                <img src="/images/login.jpg" class="h-80 w-full object-cover" />
            </div>
        </div>
    </div>
</template>

<style lang="scss"></style>
