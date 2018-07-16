import {REQUEST, SUCCESS, FAILURE} from "constant/ActionType";

export const asyncActionHelper = (type, promiseCreator) => {
    return (args = {}) => (dispatch, getState) => {
        dispatch({args, type, readyState: REQUEST});
        let promise = promiseCreator(args);

        // handle thunk-style promises
        if (typeof promise === 'function') {
            promise = promise(dispatch, getState);
        }
        return promise.then(
            res => dispatch({args, type, readyState: SUCCESS, data: res.data}),
            err => dispatch({args, type, readyState: FAILURE, err})
        )
    }
};