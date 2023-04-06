import { defineStore } from "pinia";
import { useMovieStore } from "./MovieStore";
import { ref } from "vue";

const url = 'https://api.themoviedb.org/3/search/movie?api_key=2c2636479369db22879a5175b93aa34b&query='

// export const useSearchStore =  defineStore('searchStore', {
// 	state: () => ({
// 		loader: false,
// 		movies: []
// 	}),
// 	actions: {
// 		async getMovies(search) {
// 			this.loader = true
// 			const res = await fetch(`${url}${search}`)
// 			const data = await res.json()
// 			console.log(data.results)
// 			this.movies = data.results
// 			this.loader = false
// 		},
// 		addToUserMovies(object) {
// 			const movieStore = useMovieStore();
// 			movieStore.movies.push({ ...object, isWatched: false })
// 			movieStore.activeTab = 1
// 		}
// 	}
// })


export const useSearchStore = defineStore('searchStore', () => {
	const loader = ref(false)
	const movies = ref([])

	const getMovies = async(search) => {
		loader.value = true
		const res = await fetch(`${url}${search}`)
		const data = await res.json()
		console.log(data.results)
		movies.value = data.results
		loader.value = false
	}

	const addToUserMovies = (object) => {
		const movieStore = useMovieStore();
		movieStore.movies.push({ ...object, isWatched: false })
		movieStore.activeTab = 1
	}

	return {
		loader, movies, getMovies, addToUserMovies
	}
})