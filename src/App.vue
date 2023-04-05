<template>
	<header class="header">
		<h2>Movies</h2>
	</header>
	<div v-for="item in movieStore.movies" :key="item.id">
		{{ item.original_title }}
	</div>
</template>

<script setup>
import { useMovieStore } from './stores/MovieStore';

const movieStore = useMovieStore();
</script>

<style>
</style>
