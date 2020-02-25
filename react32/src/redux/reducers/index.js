import {combineReducers} from "redux";
import userReducer from "./userReducer"

const rootReducers = combineReducers({
    userReducer //userReducer: userReducer
});

export default rootReducers;