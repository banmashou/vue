<script setup lang="ts">
import articleApi from '@/apis/articleApi'

const { data: result } = await articleApi.article()

const articles = ref(result)

const del = (index: number) => {
    articles.value.splice(index, 1)
}
</script>

<template>
    <div class="article">
        <TransitionGroup tag="ul" name="animate">
            <li v-for="(article, index) of articles" :key="article.id" @click="del(index)">
                {{ article.title }}
            </li>
        </TransitionGroup>
    </div>
</template>

<style lang="scss" scoped>
.article {
    padding: 30px;
    position: relative;
    background: #34495e;
    ul {
        li {
            padding: 10px;
            margin-bottom: 20px;
            background: #8e44ad;
            color: white;
        }
    }
}

.animate-leave-active {
    transition: all 1s ease;
    position: absolute;
    width: 100%;
}

.animate-leave-to {
    opacity: 0;
}
.animate-move {
    transition: all 1s ease;
}
</style>
