import {createAction} from "redux-actions";

import {VISIBLE_MODAL, CONFIRM_MODAL, SET_RECORD} from "constant/ActionType";

export  const visibleModal = createAction(VISIBLE_MODAL);
export  const setRecord = createAction(SET_RECORD);
export  const confirmModal = createAction(CONFIRM_MODAL);
