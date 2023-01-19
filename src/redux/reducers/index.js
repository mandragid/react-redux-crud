import { combineReducers } from "redux";
import regisReducer from "./regisReducers";
import loginReducer from "./loginReducers";

const rootReducers = combineReducers({
  regis: regisReducer,
  login: loginReducer,
});

export default rootReducers;
