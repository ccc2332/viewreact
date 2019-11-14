import { combineReducers } from "redux";


import app from "../components/App/reducer/index.js";

import viewApp from "../components/ViewApp/reducer/index.js";

let rootReducer = combineReducers({ 
    app,
    viewApp
});

export { rootReducer };


