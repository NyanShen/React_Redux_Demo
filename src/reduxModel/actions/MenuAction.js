import {FETCH_MENU_DATA} from "constant/ActionType";
import {asyncActionHelper} from "reduxModel/actions/asyncActionHelper";
import MenuService from "service/MenuService";

const _menuService = new MenuService();

export const fetchMenuData = asyncActionHelper(FETCH_MENU_DATA, _menuService.getMenu);