import { combineReducers } from "redux";
import { getNumberReducer } from "./getNumberReducer";

export const rootReducer = combineReducers({
    numbers: getNumberReducer
})