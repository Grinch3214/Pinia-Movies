<template>
	<form @submit.prevent="searchStore.getMovies(searchMovie)">
		<input class="search-input" type="text" placeholder="Movie" v-model="searchMovie">
	</form>
	<Loader v-if="searchStore.loader" />
	<div v-else>
		<Movie v-for="(movie, index) in searchStore.movies" :key="index" :movie="movie" :is-search="true" />
	</div>
</template>

<script setup>
import Movie from './Movie.vue';
import Loader from '../components/Loader.vue'
import { ref } from 'vue'
import { useSearchStore } from '../stores/SearchStore'; 

const searchStore = useSearchStore()

const searchMovie = ref('')
</script>

<style scoped>
.search-input {
  border: 1px solid #e7e7e7;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  margin-bottom: 20px;
  border-radius: 10px;
}
</style>