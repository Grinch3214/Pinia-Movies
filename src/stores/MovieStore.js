import { defineStore } from "pinia";
import { ref, computed } from "vue";

// export const useMovieStore = defineStore('movieStore', {
// 	state: () => ({
// 		movies: [],
// 		activeTab: 1
// 	}),
// 	getters: {
// 		watchedMovies() {
// 			return this.movies.filter(elem => elem.isWatched)
// 		},
// 		totalCountMovies() {
// 			return this.movies.length
// 		}
// 	},
// 	actions: {
// 		setActiveTab(id) {
// 			this.activeTab = id
// 		},
// 		toggleWatched(id) {
// 			const inx = this.movies.findIndex(el => el.id === id)
// 			this.movies[inx].isWatched = !this.movies[inx].isWatched
// 		},
// 		deleteMovie(id) {
// 			this.movies = this.movies.filter(el => el.id !== id)
// 		}
// 	}
// })

export const useMovieStore = defineStore('movieStore', () => {
	const movies = ref([])
	const activeTab = ref(1)

	// getters
	const watchedMovies = computed(() => {
		return movies.value.filter(elem => elem.isWatched)
	})
	const totalCountMovies = computed(() => {
		return movies.value.length
	})

	//actions
	const setActiveTab = (id) => {
		activeTab.value = id
	}
	const toggleWatched = (id) => {
		const inx = movies.value.findIndex(el => el.id === id)
		movies.value[inx].isWatched = !movies.value[inx].isWatched
	}
	const deleteMovie = (id) => {
		movies.value = movies.value.filter(el => el.id !== id)
	}

	return {
		movies,
		activeTab,
		watchedMovies,
		totalCountMovies,
		setActiveTab,
		toggleWatched,
		deleteMovie
	}

})