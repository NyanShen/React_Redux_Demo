import {VISIBLE_MODAL, CONFIRM_MODAL, SET_RECORD} from "constant/ActionType";
import reducerCreator from "reduxModel/reducers/reducerCreator";

const initialState = {
    visible: false,
    selectedRows: [],
    record: {},
    list: []
};

function visibleModal(state) {
    return {
        list: state.list,
        record: state.record,
        selectedRows: state.selectedRows,
        visible: !state.visible
    }
}

function confirmModal(state, action) {
    return {
        list: state.list,
        record: state.record,
        selectedRows: action.selectedRows,
        visible: !state.visible
    }
}

function setRecord(state, action) {
    return {
        list: state.list,
        record: action.payload,
        visible: !state.visible
    }
}

const ListModalReducer = reducerCreator(initialState, {
    [VISIBLE_MODAL]: visibleModal,
    [CONFIRM_MODAL]: confirmModal,
    [SET_RECORD]: setRecord
});

export default ListModalReducer;