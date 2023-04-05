import { defineStore } from "pinia";

export const useMovieStore = defineStore('movieStore', {
	state: () => ({
		movies: [],
		activeTab: 1
	}),
	getters: {
		watchedMovies() {
			return this.movies.filter(elem => elem.isWatched)
		},
		totalCountMovies() {
			return this.movies.length
		}
	},
	actions: {
		setActiveTab(id) {
			this.activeTab = id
		},
		toggleWatched(id) {
			const inx = this.movies.findIndex(el => el.id === id)
			this.movies[inx].isWatched = !this.movies[inx].isWatched
		},
		deleteMovie(id) {
			this.movies = this.movies.filter(el => el.id !== id)
		}
	}
})