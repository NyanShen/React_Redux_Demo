import {creatAction} from "redux-actions";

import * as types from "../../constant/ActionType";

export  const increment = creatAction(types.INCREMENT);
export  const decrement = creatAction(types.DECREMENT);