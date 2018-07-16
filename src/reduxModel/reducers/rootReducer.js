import {combineReducers} from "redux";
import {reducer as toastr} from "react-redux-toastr";

import CounterReducer from "./CounterReducer";
import ModalReducer from "./ModalReducer";
import UserReducer from "./UserReducer";
import {MessageReducer} from "./MessageReducer";

const rootReducer = combineReducers({
    toastr,
    CounterReducer,
    ModalReducer,
    UserReducer,
    MessageReducer
});

export default rootReducer;