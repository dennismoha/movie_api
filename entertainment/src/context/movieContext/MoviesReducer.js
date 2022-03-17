import {FETCH_MOVIES, FETCH_MOVIES_GENRE, LOADING, SINGLE_MOVIE_DETAILS,ERROR} from '../ActionTypes'

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
	switch (action.type) {
		case FETCH_MOVIES:
			return {
				...state,
				moviesPayload: action.payload,
			}
		case FETCH_MOVIES_GENRE:
			console.log('genre action payoad ', action.payload)
			return {
				...state,
				genres: action.payload,
			}
		case LOADING:
			console.log('loading action payoad ', action.payload)
			return {
				...state,
				loading: action.payload,
			}
		case SINGLE_MOVIE_DETAILS:
			console.log('single action payoad ', action.payload)
			return {
				...state,
				fetchedSingleMovies: action.payload,
            }
		case ERROR:
			console.log('single action payoad ', action.payload)
			return {
				...state,
				fetchedSingleMovies: action.payload,
			}
		default:
			return state
	}
}
