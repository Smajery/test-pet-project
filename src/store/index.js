import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

export const rootReducer = combineReducers(reducers)

export const store = createStore(rootReducer, applyMiddleware(thunk))