import { combineReducers } from "redux";
import NewsReducer from "./NewsReducer";
import UserReducer from "./userReducer";

export const rootReducer = combineReducers({
    news: NewsReducer,
    user: UserReducer
});