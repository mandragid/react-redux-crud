import { combineReducers } from "redux";
import regisReducer from "./regisReducers";
import authReducer from "./authReducers";

const rootReducers = combineReducers({
  regis: regisReducer,
  login: authReducer,
});

export default rootReducers;
