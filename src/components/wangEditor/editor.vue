<script setup lang="ts">
import { nextTick } from 'vue'
import wangEditor from './wangEditor'

interface Props {
    height?: number
}

const props = withDefaults(defineProps<Props>(), {
    height: 300,
})

nextTick(() => {
    new wangEditor('#wangEditor', props)
})
</script>

<template>
    <div id="wangEditor">
        <p>欢迎使用</p>
    </div>
</template>

<style lang="scss"></style>
