<script setup lang="ts">
import MenuComponet from './admin/menu.vue'
</script>

<template>
    <div class="admin h-screen w-screen flex">
        <MenuComponet />
        <div class="content flex-1 bg-gray-200">
            <router-view />
        </div>
    </div>
</template>

<style lang="scss"></style>

<script lang="ts">
export default {
    route: { meta: { auth: true } },
}
</script>
