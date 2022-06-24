import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import FetchMovieReducer from "./TMDB";


const persistConfig = {
    key: "root",
    storage,
  };

const rootReducer =
    combineReducers({
      FetchMovieReducer
    });


export default persistReducer(persistConfig, rootReducer);