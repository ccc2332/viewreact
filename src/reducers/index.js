import { combineReducers } from "redux";

//登录
import app from "../components/App/reducer/index.js";

let rootReducer = combineReducers({ 
    app
});

export { rootReducer };


