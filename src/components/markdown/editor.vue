<script setup lang="ts">
import { nextTick } from 'vue'
import ToastEditor from './toastEditor'

interface IProps {
    modelValue?: string
    height?: number
    placeholder: string
}
const props = withDefaults(defineProps<IProps>(), {
    modelValue: '',
    height: 500,
    placeholder: '',
})
nextTick(() => {
    new ToastEditor('#editor', `${props.modelValue}`, `${props.height}px`)
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
