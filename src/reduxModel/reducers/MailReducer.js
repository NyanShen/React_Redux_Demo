import {FETCH_DATA} from "constant/ActionType";
import {asyncReducerHelper} from "./asyncReducerHelper";

export const MailReducer = asyncReducerHelper(FETCH_DATA);