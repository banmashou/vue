<script setup lang="ts">
import helper from './types/helper'
console.log(typeof helper.env.VITE_SOME_KEY);
console.log(typeof import.meta.env.VITE_SOME_KEY);
</script>

<template>
	<Suspense>
		<router-view />
	</Suspense>
</template>

<style scoped>
</style>
