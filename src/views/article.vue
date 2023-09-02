<script setup lang="ts">
import articleApi from '@/apis/articleApi'

const articles = ref()
articleApi.article().then(({ data }) => (articles.value = data))

const del = (index: number) => {
    articles.value.splice(index, 1)
}
</script>

<template>
    <div class="article">
        <AnimateList tag="ul" :duration="5">
            <li :data-index="index" v-for="(article, index) of articles" :key="article.id" @click="del(index)">
                {{ article.title }}
            </li>
        </AnimateList>
    </div>
</template>

<style lang="scss" scoped>
.article {
    padding: 30px;
    width: 100vw;
    height: 100vh;
    position: relative;
    background: #34495e;
    ul {
        li {
            padding: 10px;
            margin-bottom: 20px;
            background: #f1c40f;
            color: #333;
            border-radius: 5px;
        }
    }
}
</style>
