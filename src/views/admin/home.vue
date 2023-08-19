<script setup lang="ts">
import { ref } from 'vue'

interface ICard {
    title: string
    price: number
    icon: string
    iconColor: string
    totalTitle: string
    total: number
}

const cards = ref<ICard[]>([
    {
        title: '总人数',
        price: 23343,
        icon: 'fas fa-address-card',
        iconColor: 'text-violet-500',
        total: 3892982,
        totalTitle: '总人数',
    },
    {
        title: '销售额',
        price: 18393,
        icon: 'fas fa-apple-alt',
        iconColor: 'text-green-500',
        total: 9387382,
        totalTitle: '总销售额',
    },
    {
        title: '订单数',
        price: 3803,
        icon: 'fas fa-award',
        iconColor: 'text-blue-500',
        total: 83493,
        totalTitle: '总订单数',
    },
    {
        title: '评论数',
        price: 8994,
        icon: 'fas fa-baseball-ball',
        iconColor: 'text-red-500',
        total: 48920,
        totalTitle: '总评论',
    },
])
</script>

<template>
    <div class="grid grid-flow-col gap-3">
        <el-card
            shadow="hover"
            :body-style="{ padding: '20px' }"
            v-for="(card, index) of cards"
            :key="index"
            class="cursor-pointer"
        >
            <template #header>
                <div class="flex justify-between items-center">
                    {{ card.title }}
                    <el-tag type="danger" size="mini" effect="dark">月</el-tag>
                </div>
            </template>

            <section class="flex mt-3 justify-between items-center">
                <span class="text-3xl">$29322</span>
                <i :class="[card.icon, card.iconColor]" class="text-5xl"></i>
            </section>
            <section class="text-base mt-6 flex justify-between">
                {{ card.totalTitle }}
                <span class>{{ card.total }}</span>
            </section>
        </el-card>
    </div>
</template>

<style lang="scss"></style>
