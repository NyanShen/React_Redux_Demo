import {createAction} from "redux-actions";

import {INCREMENT, DECREMENT} from "constant/ActionType";

export  const increment = createAction(INCREMENT);
export  const decrement = createAction(DECREMENT);

export function incrementIfOdd() {
    return (dispatch, getStore) => {
        const count = getStore().CounterReducer.count;
        if (count % 2 ==0) {
            return
        }
        dispatch(increment())
    }
}