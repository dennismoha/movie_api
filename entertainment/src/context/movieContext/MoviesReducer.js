import { FETCH_MOVIES } from '../ActionTypes';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {
        case FETCH_MOVIES:
            return {
                ...state,
                moviesPayload:action.payload
            }
        default:
            return state        
    }

}