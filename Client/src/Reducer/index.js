import { combineReducers } from "redux";
import authReduer from "./auth";
import currentUserReducer from "./currentUser";
import chanellReducer from "./Chanel";
import videoReducer from "./video";
import likedVideoReducer from "./likedVideo";

export default combineReducers({
    authReduer,
    currentUserReducer,
    chanellReducer,
    videoReducer,
    likedVideoReducer,
})