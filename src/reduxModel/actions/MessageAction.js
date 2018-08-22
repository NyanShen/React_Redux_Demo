import {createAction} from "redux-actions";

import {FETCH_MESSAGE_DATA, SET_PLAN} from "constant/ActionType";
import {asyncActionHelper} from "reduxModel/actions/asyncActionHelper";
import MessageService from "service/demo-service/MessageService";

const _messageService = new MessageService();

export const fetchMessageData = asyncActionHelper(FETCH_MESSAGE_DATA, _messageService.getMessage);

export const setPlan = createAction(SET_PLAN);