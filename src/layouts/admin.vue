<script setup lang="ts"></script>

<template>
    <div class="admin h-screen w-screen flex">
        <div class="menu w-[200px] bg-gray-800 p-4">
            <div class="logo text-gray-300 flex items-center">
                <i class="fas fa-robot text-fuchsia-300 mr-2 text-[25px]"></i>
                <span class="text-md">斑马兽</span>
            </div>

            <!-- 菜单 -->
            <div class="left-container">
                <dl class="text-gray-300 text-sm">
                    <dt class="text-md mt-6">
                        <i class="fas fa-file-excel mr-2"></i>
                        <span class="text-md">错误页面</span>
                    </dt>
                    <dd
                        class="py-3 pl-4 my-2 bg-violet-700 text-white rounded-md cursor-pointer hover:bg-violet-500 duration-300"
                    >
                        404错误
                    </dd>
                    <dd class="py-3 pl-4 my-2 hover:bg-violet-500 duration-300 cursor-pointer rounded-md">500错误</dd>
                </dl>
            </div>
        </div>
        <div class="content flex-1 bg-gray-200">
            <router-view />
        </div>
    </div>
</template>

<style lang="scss"></style>

<script lang="ts">
export default {
    route: { meta: { auth: true } },
}
</script>
