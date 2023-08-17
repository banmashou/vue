<script setup lang="ts"></script>

<template>
    <div class="grid grid-flow-col gap-3">
        <el-card shadow="hover" :body-style="{ padding: '20px' }" v-for="n of 4" class="cursor-pointer">
            <template #header>
                <div class="flex justify-between items-center">
                    用户数
                    <el-tag type="danger" size="mini" effect="dark">月</el-tag>
                </div>
            </template>

            <section class="flex mt-3 justify-between items-center">
                <span class="text-3xl">$29322</span>
                <i class="fas fa-ad text-violet-500 text-5xl"></i>
            </section>
            <section class="text-base mt-6 flex justify-between">
                总人数
                <span class>200人</span>
            </section>
        </el-card>
    </div>
</template>

<style lang="scss"></style>
