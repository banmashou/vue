<script setup lang="ts">
import articleApi from '@/apis/articleApi'

const { data: result } = await articleApi.article()

const articles = ref(result)
</script>

<template>
    <div class="article">
        <ul>
            <li v-for="article of articles" :key="article.id">
                {{ article.title }}
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.article {
    padding: 30px;
    ul {
        li {
            padding: 10px;
            margin-bottom: 20px;
            background: #8e44ad;
            color: white;
        }
    }
}
</style>
