import {useReducer} from 'react'
import moviesReducer from './MoviesReducer'
import axios from '../../AxiosInstance'
import MoviesContext from './MoviesContext'

import {FETCH_MOVIES, FETCH_MOVIES_GENRE, SINGLE_MOVIE_DETAILS, LOADING,ERROR} from '../ActionTypes'

const MoviesState = (props) => {
	const initialState = {
		loading: false,
		success: false,
		error: false,
		moviesPayload: '',
		fetchedSingleMovies: '',
		genres: '',
	}

	const [state, dispatch] = useReducer(moviesReducer, initialState)

	const fetchMovies = async (data) => {
		let payload, url
		url = `https://api.themoviedb.org/3/trending/person/week?api_key=${process.env.REACT_APP_API_KEY}`
		try {
			payload = await axios.get(url)
			payload = payload.data.items
			console.log('payload is ', payload)
			dispatch({
				type: FETCH_MOVIES,
				payload,
			})
		} catch (error) {
			console.log('error fetching movies')
			dispatch({
				type: Error,
				payload: 'error loading page.'
			})
		}
	}

	// FETCH A SINGLE MOVIE DETAIL;

	const fetchSearchedMovie = async (data, page = 1) => {
		let payload, url, type
		loader(true)
		console.log('data is ', data)
		//url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-U`
		url = `https://api.themoviedb.org/3/search/${type ? 'tv' : 'movie'}?api_key=${
			process.env.REACT_APP_API_KEY
		}&language=en-US&query=${data}&page=${page}&include_adult=false`

		try {
			payload = await axios.get(url)
			loader(false)
			dispatch({
				type: SINGLE_MOVIE_DETAILS,
				payload: payload.data,
			})
			
		} catch (error) {
			console.log('error fetching single movie details', error)
            dispatch({
				type: ERROR,
				payload: Error.response,
			})
		}
	}

	const loader = (data) => {
		dispatch({
			type: LOADING,
			payload: data,
		})
	}

	// Get the list of official genres for movies.
	const listOfGenreMovies = async (data = 1) => {
		let payload, url, page

		page = data

		url = `https://api.themoviedb.org/3/trending/person/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
		try {
			payload = await axios.get(url)			
			payload = payload.data			

			dispatch({
				type: FETCH_MOVIES_GENRE,
				payload,
			})
		} catch (error) {
			console.log('error fetching movies')
			dispatch({
				type: ERROR,
				payload: Error.response,
			})
		}
	}

	return (
		<MoviesContext.Provider
			value={{
				moviesPayload: state.moviesPayload,
				fetchMovies,
				listOfGenreMovies,
				genres: state.genres,
				fetchSearchedMovie,
				loader,
				loading: state.loading,
				fetchedSingleMovies: state.fetchedSingleMovies,
			}}
		>
			{props.children}
		</MoviesContext.Provider>
	)
}

export default MoviesState
