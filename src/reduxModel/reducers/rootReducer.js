import {combineReducers} from "redux";
import {reducer as toastr} from "react-redux-toastr";

import CounterReducer from "./CounterReducer";
import MessageModalReducer from "./MessageModalReducer";

const rootReducer = combineReducers({
    toastr,
    CounterReducer,
    MessageModalReducer
});

export default rootReducer;