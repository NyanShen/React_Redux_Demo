import {combineReducers} from "redux";
import {reducer as toastr} from "react-redux-toastr";

import CounterReducer from "./CounterReducer";
import ModalReducer from "./ModalReducer";
import UserReducer from "./UserReducer";
import {MessageReducer} from "./MessageReducer";
import {MenuReducer} from "./MenuReducer";

const rootReducer = combineReducers({
    toastr,
    CounterReducer,
    ModalReducer,
    UserReducer,
    MessageReducer,
    MenuReducer
});

export default rootReducer;