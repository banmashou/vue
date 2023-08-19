<script setup lang="ts">
import MenuComponet from './admin/menu.vue'
import Navber from './admin/navbar.vue'
import HistoryLink from './admin/historyLink.vue'
</script>

<template>
    <div class="admin h-screen w-screen flex">
        <MenuComponet />
        <div class="content flex-1 bg-gray-100">
            <Navber />
            <HistoryLink />
            <div class="m-3 p-5">
                <router-view />
            </div>
        </div>
    </div>
</template>

<style lang="scss"></style>

<script lang="ts">
export default {
    route: { meta: { auth: true } },
}
</script>
