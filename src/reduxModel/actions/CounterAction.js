import {createAction} from "redux-actions";

import * as types from "../../constant/ActionType";

export  const increment = createAction(types.INCREMENT);
export  const decrement = createAction(types.DECREMENT);

export function incrementIfOdd() {
    return (dispatch, getStore) => {
        const count = getStore().CounterReducer.count;
        if (count % 2 ==0) {
            return
        }
        dispatch(increment())
    }
}