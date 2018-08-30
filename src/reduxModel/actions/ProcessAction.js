import {createAction} from "redux-actions";

import {SET_SELECT_MAILS, INITIAL_STATE} from "constant/ProcessActionType";

export const initState = createAction(INITIAL_STATE);
export const setSelectedMails = createAction(SET_SELECT_MAILS);
