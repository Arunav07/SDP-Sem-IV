import { legacy_createStore as createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { routerMiddleware } from "connected-react-router";
import { history } from "../history";
import rootReducer from "./Reducer";
import { rootSaga } from "./Sagas";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [routerMiddleware(history), sagaMiddleware, logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);