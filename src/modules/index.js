import { combineReducers } from "redux";
import stock from "./stock";
import coin from "./coin";
const rootReducer = combineReducers({ stock, coin });

export default rootReducer;
