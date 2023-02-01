import { combineReducers } from "redux";
import regisReducer from "./regisReducers";
import authReducer from "./authReducers";
import { carActionReducers } from "./carActionReducers";

const rootReducers = combineReducers({
  regis: regisReducer,
  login: authReducer,
  carlist: carActionReducers,
});

export default rootReducers;
