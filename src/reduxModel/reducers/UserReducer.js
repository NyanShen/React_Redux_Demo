import {RECEIVE_DATA} from "constant/ActionType";

const initialState = {
    userList: []
};

const userReducer = function (state = initialState, action) {
    switch (action.type) {
        case RECEIVE_DATA:
            return {userList: action.list};
        default:
            return state;
    }
};
export default userReducer;