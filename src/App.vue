<script setup lang="ts">
import { env } from './types/helper'
console.log(typeof env.VITE_SOME_KEY);
console.log(typeof import.meta.env.VITE_SOME_KEY);
</script>

<template>
	<Suspense>
		<router-view />
	</Suspense>
</template>

<style scoped>
</style>
