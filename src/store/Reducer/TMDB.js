import { FETCH_MOVIE, SEARCH_MOVIE } from "../Type";

const moviesInitialState={
    isLoading: false,
    isError: false,
    SearchMovies: [],
    Movie: {}
};

const FetchMovieReducer = (state = moviesInitialState, action) => {
    switch (action.type) {
        case FETCH_MOVIE.REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case FETCH_MOVIE.SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                Movie: action.payload
            };
        case FETCH_MOVIE.FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            };
        case SEARCH_MOVIE.REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case SEARCH_MOVIE.SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                SearchMovies: action.payload.results
            };
        case SEARCH_MOVIE.FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            };
        default:
            return state;
    }
}

export default FetchMovieReducer;