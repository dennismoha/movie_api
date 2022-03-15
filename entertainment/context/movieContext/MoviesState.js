import { useReducer } from 'react';
import moviesReducer from './moviesReducer';

const movieState = (props) => {
    const initialState = {
        loading: false,
        success: false,
        error: false,
        moviesPayload: ''

    }
}

const [state, dispatch] = useReducer(moviesReducer, initialState);

const fetchMovies = async (data) => {
    try {

    } catch (error) {

    }

}

