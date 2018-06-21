import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const middleWares = [
    applyMiddleware(thunk),
];

const configureStore = initialState => createStore(rootReducer, initialState, compose(...middleWares));

export default configureStore;