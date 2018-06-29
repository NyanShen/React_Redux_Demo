import {createAction} from "redux-actions";

import {OPENMODAL, CLOSEMODAL, CONFIRM} from "constant/ActionType";

export  const openModal = createAction(OPENMODAL);
export  const closeModal = createAction(CLOSEMODAL);
export  const handleConfirm = createAction(CONFIRM);
