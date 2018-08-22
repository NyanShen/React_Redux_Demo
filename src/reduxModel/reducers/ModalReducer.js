import {OPENMODAL, CLOSEMODAL, CONFIRM, SET_PLAN} from "constant/ActionType";
import reducerCreator from "reduxModel/reducers/reducerCreator";

const initialState = {
    visible: false,
    message: "Admin",
    list: []
};

function visibleModal(state) {
    return {
        list: state.list,
        message: state.message,
        visible: !state.visible
    }
}

function confirmMessage(state) {
    return {
        list: state.list,
        message: "confirm admin",
        visible: !state.visible
    }
}

function setPlan(state, action) {
    return {
        list: state.list,
        message: action.payload,
        visible: !state.visible
    }
}

const ModalReducer = reducerCreator(initialState, {
    [OPENMODAL]: visibleModal,
    [CLOSEMODAL]: visibleModal,
    [CONFIRM]: confirmMessage,
    [SET_PLAN]: setPlan
});

export default ModalReducer;