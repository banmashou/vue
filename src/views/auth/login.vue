<script setup lang="ts">
import bmInput from '@/components/form/bm-input.vue'
import bmButton from '@/components/form/bm-button.vue'
import bmLink from '@/components/form/bm-link.vue'
</script>

<template>
    <div class="bg-slate-300 h-screen flex justify-center items-center p-5">
        <div class="w-[720px] bg-white md:grid grid-cols-2 rounded-md shadow-md overflow-hidden">
            <div class="p-6">
                <h2 class="text-center text-gray-700 text-lg mt-3">会员登录</h2>
                <div class="mt-8">
                    <!-- <input type="text" placeholder="请输入手机号或邮箱" class="bm-input" /> -->
                    <!-- <input type="text" placeholder="请输入手机号或邮箱" class="bm-input mt-3" /> -->
                    <bmInput />
                    <bmInput class="mt-3" />
                </div>
                <!-- <button class="bm-button mt-5">登录</button> -->
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
