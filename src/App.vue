<script setup lang="ts">
console.log(import.meta.env.VITE_ROUTE_AUTOLOAD);
</script>

<template>
	<Suspense>
		<router-view />
	</Suspense>
</template>

<style scoped>
</style>
