import { combineReducers } from "redux";
import authReduer from "./auth";
import currentUserReducer from "./currentUser";
import chanellReducer from "./Chanel";
import videoReducer from "./video";

export default combineReducers({
    authReduer,
    currentUserReducer,
    chanellReducer,
    videoReducer,
})