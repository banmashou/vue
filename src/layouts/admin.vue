<script setup lang="ts">
import MenuComponet from './admin/menu.vue'
import Navber from './admin/navbar.vue'
import HistoryLink from './admin/historyLink.vue'
import menuStore from '@/store/menuStore'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
const route = useRoute()
const menu = menuStore()
menu.init()
onBeforeRouteUpdate(() => {
	menu.addHistoryMenu(route)
})
</script>

<template>
	<div class="admin h-screen w-screen grid grid-cols-[auto_1fr]">
		<MenuComponet class="hidden md:block" />
		<div class="content bg-gray-100 grid grid-rows-[auto_1fr]">
			<div>
				<Navber />
				<HistoryLink />
			</div>
			<div class="p-3 relative overflow-y-auto">
				<router-view #default="{ Component }">
					<Transition appear class="animate__animated" enter-active-class="animate__fadeInRight"
						leave-active-class="animate__fadeOutLeft">
						<component :is="Component" class="absolute w-full"></component>
					</Transition>
				</router-view>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
</style>

<script lang="ts">
export default {
	route: { meta: { auth: true } },
}
</script>
