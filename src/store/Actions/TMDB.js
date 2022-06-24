import {
    FETCH_MOVIE,
    SEARCH_MOVIE
} from "../Type"

export const fetchMovieRequest = (payload) =>({
    type: FETCH_MOVIE.REQUEST,
    payload
});

export const fetchMovieFailure = (payload) =>({
    type: FETCH_MOVIE.FAILURE,
    payload
});

export const fetchMovieSuccess = (payload) =>({
    type: FETCH_MOVIE.SUCCESS,
    payload
});


export const searchMovieRequest = (payload) =>({
    type: SEARCH_MOVIE.REQUEST,
    payload
});

export const searchMovieFailure = (payload) =>({
    type: SEARCH_MOVIE.FAILURE,
    payload
});

export const searchMovieSuccess = (payload) =>({
    type: SEARCH_MOVIE.SUCCESS,
    payload
});
