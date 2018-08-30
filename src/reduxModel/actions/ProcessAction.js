import {createAction} from "redux-actions";

import {SET_SELECT_MAILS, INITIAL_STATE, ADD_BUSINESS} from "constant/ProcessActionType";

export const initState = createAction(INITIAL_STATE);
export const setSelectedMails = createAction(SET_SELECT_MAILS);
export const addBusiness = createAction(ADD_BUSINESS);
