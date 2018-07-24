import {FETCH_MENU_DATA} from "constant/ActionType";
import {asyncReducerHelper} from "./asyncReducerHelper";

export const MenuReducer = asyncReducerHelper(FETCH_MENU_DATA);