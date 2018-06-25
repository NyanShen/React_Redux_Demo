import {combineReducers} from "redux";
import {reducer as toastr} from "react-redux-toastr";

import CounterReducer from "./CounterReducer";

const rootReducer = combineReducers({
    toastr,
    CounterReducer
});

export default rootReducer;