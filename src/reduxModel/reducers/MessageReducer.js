import {FETCH_MESSAGE_DATA} from "constant/ActionType";
import {asyncReducerHelper} from "./asyncReducerHelper";

export const MessageReducer = asyncReducerHelper(FETCH_MESSAGE_DATA);