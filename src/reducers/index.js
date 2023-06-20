import { ADD_MOVIES } from "../actions";

const initialMoviesState = {
    list: [],
    favourites: []
}

/*
    why spread operator is used here ?
    eg: 
    var alpha = { a: 1, b: 2, c: 3 }

    var beta = { ...alpha, b: 100 }        
    // O/P: beta = { a: 1, b: 100, c: 3 } 
*/
export default function movies (state = initialMoviesState, action) {
    if(action.type === ADD_MOVIES) {
        return { ...state, list: action.movies }
    }
    return state;
}