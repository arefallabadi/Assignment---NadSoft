import { createStore, combineReducers } from "redux";
// import state
import getResult from "./result";

// create reducers
const reducers = combineReducers({ getResult });
const store = createStore(reducers);

export default store;
