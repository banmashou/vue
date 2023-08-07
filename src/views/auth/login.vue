<script setup lang="ts"></script>

<template>
    <div class="bg-slate-300 h-screen flex justify-center items-center">
        <div class="w-[720px] bg-white -translate-y-16 grid grid-cols-2 rounded-md shadow-md overflow-hidden">
            <div class="p-6">
                <h2 class="text-center text-gray-700 text-lg">会员登录</h2>
                <div class="mt-8">
                    <input type="text" placeholder="请输入手机号或邮箱" class="bm-input" />
                    <input type="text" placeholder="请输入手机号或邮箱" class="bm-input mt-3" />
                </div>
            </div>
            <div>
                <img src="/images/login.jpg" class="h-80 w-full object-cover" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.bm-input {
    @apply border w-full rounded-sm py-1 px-2 outline-none border-gray-200 placeholder:text-xs focus:ring-2 ring-offset-2 ring-violet-600 duration-300 focus:border-white;
}
</style>
