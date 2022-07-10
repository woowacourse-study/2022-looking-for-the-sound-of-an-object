import { combineReducers } from "redux";
import stock from "./stock";
import coin from "./coin";
import card from "./card";

const rootReducer = combineReducers({ stock, coin, card });

export default rootReducer;
