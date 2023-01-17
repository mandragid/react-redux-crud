import { combineReducers } from "redux";
import regisReducer from "./regisReducers";

const rootReducers = combineReducers({
    regis: regisReducer,
})

export default rootReducers