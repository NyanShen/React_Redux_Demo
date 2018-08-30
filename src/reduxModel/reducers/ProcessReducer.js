import {SET_SELECT_MAILS, INITIAL_STATE} from "constant/ProcessActionType";
import reducerCreator from "reduxModel/reducers/reducerCreator";

const initialState = {
    selectedMails: []
};

function setSelectedMails(state, action) {
    return {
        selectedMails: action.payload,
    }
}
function initState() {
    return {
        selectedMails: [],
    }
}

const ProcessReducer = reducerCreator(initialState, {
    [INITIAL_STATE]: initState,
    [SET_SELECT_MAILS]: setSelectedMails
});

export default ProcessReducer;