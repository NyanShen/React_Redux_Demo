import {SET_SELECT_MAILS} from "constant/ProcessActionType";
import reducerCreator from "reduxModel/reducers/reducerCreator";

const initialState = {
    selectedMails: []
};

function setSelectedMails(state, action) {
    return {
        selectedMails: action.payload.selectedMails,
    }
}

const ProcessReducer = reducerCreator(initialState, {
    [SET_SELECT_MAILS]: setSelectedMails
});

export default ProcessReducer;