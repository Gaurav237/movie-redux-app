import { combineReducers } from 'redux';
import { ADD_MOVIES, ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES, SET_SHOW_FAVOURITES } from "../actions";

const initialMoviesState = {
    list: [],
    favourites: [],
    showFavourites: false
}

export function movies (state = initialMoviesState, action) {
    switch(action.type) {
        case ADD_MOVIES:
            return { ...state, list: action.movies }
        case ADD_TO_FAVOURITES:
            return { ...state, favourites: [action.movie, ...state.favourites] }
        case REMOVE_FROM_FAVOURITES: 
            state.favourites = state.favourites.filter((item) => item !== action.movie);
            return state;
        case SET_SHOW_FAVOURITES:
            return { ...state, showFavourites: action.flag }
        default:
            return state;
    }
}

const initialSearchState = {
    result : {}
} 

export function search (state = { result: {} }, action){
    return state;
}

// const initialRootState = {
//     movies: initialMoviesState,
//     search: initialSearchState
// }

// export default function rootReducer (state = initialRootState, action){
//     return {
//         movies: movies(state.movies, action),
//         search: search(state.search, action)
//     }
// }

export default combineReducers({
    movies: movies,
    search: search
});
