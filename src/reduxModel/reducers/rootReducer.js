import {combineReducers} from "redux";
import {reducer as toastr} from "react-redux-toastr";

import CounterReducer from "./CounterReducer";
import ModalReducer from "./ModalReducer";

const rootReducer = combineReducers({
    toastr,
    CounterReducer,
    ModalReducer
});

export default rootReducer;