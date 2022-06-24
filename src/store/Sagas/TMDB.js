import { call, takeLatest, put } from "redux-saga/effects";
import { FETCH_MOVIE,SEARCH_MOVIE } from "../Type";
import{
    fetchMovieFailure,
    fetchMovieSuccess,
    searchMovieFailure,
    searchMovieSuccess
} from "../Actions";

import {
    SearchTMDBMovies,
    FetchMovie
} from "../../Services/SearchTMDB";

import { toast } from "react-toastify";
export function* fetchMovieSaga(action) {
    try{
        let res = yield call(FetchMovie,action.payload);
        if(res.success){
            yield put(fetchMovieSuccess(res.res));
        } else{
            toast.error("Error fetching movie");
        }
    } catch(error){
        yield put(fetchMovieFailure(error));
        toast.error("Error fetching movie");
    }
}

export function* searchMovieSaga(action) {
    try{
        let res = yield call(SearchTMDBMovies,action.payload);
        if(res.success){
            yield put(searchMovieSuccess(res.res));
        }
        else{
            toast.error("Error searching movie");
        }
    } catch(error){
        yield put(searchMovieFailure(error));
        toast.error("Error searching movie");
    }
}

const TMDBSaga = () =>[
    takeLatest(FETCH_MOVIE.REQUEST,fetchMovieSaga),
    takeLatest(SEARCH_MOVIE.REQUEST,searchMovieSaga)
]

export default TMDBSaga();