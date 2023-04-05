<template>
	<div>
		<img :src="`${movie.poster__path}`" :alt="movie.original__title">
	</div>
</template>

<script setup>
	const props = defineProps({
		movie: {
			type: Object,
			required: true,
			default: () => {}
		}
	})
</script>