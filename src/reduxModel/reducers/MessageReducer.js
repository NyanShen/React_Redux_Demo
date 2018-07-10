import {RECEIVE_DATA} from "constant/ActionType";

const initialState = {
    message: []
};

const MessageReducer = function (state = initialState, action) {
    switch (action.type) {
        case RECEIVE_DATA:
            return {message: action.list};
        default:
            return state;
    }
};
export default MessageReducer;