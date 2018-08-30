import {SET_SELECT_MAILS, INITIAL_STATE, ADD_BUSINESS} from "constant/ProcessActionType";
import reducerCreator from "reduxModel/reducers/reducerCreator";

const initialState = {
    selectedMails: [],
    businessList: []
};

function setSelectedMails(state, action) {
    return {
        selectedMails: action.payload,
        businessList: state.businessList
    }
}

function initState() {
    return {
        selectedMails: [],
        businessList: []
    }
}

function addBusiness(state, action) {
    const businessList = state.businessList;
    const concatBusinessList = businessList.concat(action.payload);
    return {
        selectedMails: state.selectedMails,
        businessList: concatBusinessList
    }
}

const ProcessReducer = reducerCreator(initialState, {
    [INITIAL_STATE]: initState,
    [SET_SELECT_MAILS]: setSelectedMails,
    [ADD_BUSINESS]: addBusiness
});

export default ProcessReducer;