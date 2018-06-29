import {OPENMODAL, CLOSEMODAL, CONFIRM} from "constant/ActionType";

const initialState = {
    visible: false,
    message: "Admin",
    list: []
};

const ModalReducer = (state = initialState, action) => {
    const visible = state.visible;
    const list = state.list;
    let message = state.message;
    switch (action.type) {
        case OPENMODAL:
        case CLOSEMODAL:
            return {
                list,
                message,
                visible: !visible
            };
        case CONFIRM:
            message = "confirm message";
            return {
                list,
                message: message,
                visible: !visible
            };
        default:
            return state;
    }
};

export default ModalReducer;