<script setup lang="ts">
const props = defineProps({
    error: String,
})
</script>

<template>
    <div class="bm-error" v-show="props.error">
        {{ props.error }}
    </div>
</template>

<style lang="scss"></style>
