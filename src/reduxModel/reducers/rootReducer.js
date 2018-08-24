import {combineReducers} from "redux";
import {reducer as toastr} from "react-redux-toastr";

import CounterReducer from "./CounterReducer";
import ListModalReducer from "./ListModalReducer";
import UserReducer from "./UserReducer";
import {MessageReducer} from "./MessageReducer";
import {MenuReducer} from "./MenuReducer";
import ProcessReducer from "reduxModel/reducers/ProcessReducer";
import {MailReducer} from "reduxModel/reducers/MailReducer";

const rootReducer = combineReducers({
    toastr,
    CounterReducer,
    ListModalReducer,
    UserReducer,
    MessageReducer,
    MenuReducer,
    ProcessReducer,
    MailReducer
});

export default rootReducer;