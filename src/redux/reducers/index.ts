import { combineReducers } from "redux";
import loginReducer from "./auth/loginReducer";

const index = combineReducers({ login: loginReducer });

export default index;
