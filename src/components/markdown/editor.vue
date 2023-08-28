<script setup lang="ts">
import { nextTick } from 'vue'
import ToastEditor from './toastEditor'

nextTick(() => {
    new ToastEditor('#editor', '300px', 'abc')
})
</script>

<template>
    <div id="editor"></div>
</template>

<style lang="scss">
@import 'https://uicdn.toast.com/editor/latest/toastui-editor.min.css';

#editor {
    @apply bg-white;
}
</style>
