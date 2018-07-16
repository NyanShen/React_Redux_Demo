import {combineReducers} from "redux";
import {FAILURE, REQUEST, SUCCESS} from "constant/ActionType";

export const asyncReducerHelper = (type, reducers = {}) => {
    let defaultReducers = {
        loading: (state = false, action) => {
            if (action.type === type) {
                return action.readyState === REQUEST;
            }
            return state;
        },
        data: (state = null, action) => {
            if (action.type === type && action.readyState === SUCCESS) {
                return action.data;
            }
            return state;
        },
        error: (state = null, action) => {
            if (action.type === type && action.readyState === FAILURE) {
                return action.err;
            }
            return state;
        },
    };

    return combineReducers(Object.assign({}, defaultReducers, reducers));
};