<script setup lang="ts">
import articleApi from '@/apis/articleApi'
import gsap from 'gsap'

const articles = ref()
articleApi.article().then(({ data }) => (articles.value = data))

const del = (index: number) => {
    articles.value.splice(index, 1)
}

const beforeEnter = (el) => {
    gsap.set(el, {
        opacity: 0,
    })
}

const enter = (el) => {
    gsap.to(el, {
        opacity: 1,
        duration: 1,
        delay: el.dataset.index * 0.2,
    })
}
</script>

<template>
    <div class="article">
        <TransitionGroup appear tag="ul" name="animate" @before-enter="beforeEnter" @enter="enter">
            <li :data-index="index" v-for="(article, index) of articles" :key="article.id" @click="del(index)">
                {{ article.title }}
            </li>
        </TransitionGroup>
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
