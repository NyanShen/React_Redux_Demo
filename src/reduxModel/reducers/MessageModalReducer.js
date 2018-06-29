import {OPENMODAL, CLOSEMODAL, CONFIRM} from "constant/ActionType";

const initialState = {
    visible: false,
    message: "Admin"
};

const MessageModalReducer = (state = initialState, action) => {
    const visible = state.visible;
    let message = state.message;
    switch (action.type) {
        case OPENMODAL:
        case CLOSEMODAL:
            return {
                message,
                visible: !visible
            };
        case CONFIRM:
            message = "confirm message";
            return {
                message: message,
                visible: !visible
            };
        default:
            return state;
    }
};

export default MessageModalReducer;