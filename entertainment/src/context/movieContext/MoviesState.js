import { useReducer } from 'react';
import moviesReducer from './MoviesReducer';
import axios from '../../AxiosInstance'
import MoviesContext from './MoviesContext'

import {FETCH_MOVIES} from '../ActionTypes'

const MoviesState = (props) => {
    const initialState = {
        loading: false,
        success: false,
        error: false,
        moviesPayload: ''

    }

    
const [state, dispatch] = useReducer(moviesReducer, initialState);

const fetchMovies = async (data) => {
    let payload, url;
    url = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
    try {
        payload = await axios.get(url)
        console.log('payload is ', payload)
        dispatch({
            type:FETCH_MOVIES,
            payload
        })
    } catch (error) {
        console.log('error fetching movies');
        dispatch({
            type:Error,
            payload:Error.response
        })

    }

}

    return(
        <MoviesContext.Provider
            value={{
              moviesPayload:state.moviesPayload,
              fetchMovies
            }}
        >
            {props.children}
        </MoviesContext.Provider>
    )


}

export default MoviesState


