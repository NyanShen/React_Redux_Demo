import * as types from "../../constant/ActionType";

const initialState = {
  count: 0
};

const counterReducer = function (state = initialState, action) {
    const count = state.count;
    switch (action.type) {
        case types.INCREMENT:
            return {count: count + 1};
        case types.DECREMENT:
            return {count: count - 1};
        default:
            return state;
    }
};
export default counterReducer;