import { defineStore } from "pinia";

export const useMovieStore = defineStore('movieStore', {
	state: () => ({
		movies: [
			{
				id: 1,
				original_title: 'The Batman',
				isWatched: false
			}
		]
	})
})