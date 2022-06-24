import { all } from "redux-saga/effects";
import TMDB from "./TMDB";

const sagas = [...TMDB];

export function* rootSaga(){
    yield all(sagas);
}