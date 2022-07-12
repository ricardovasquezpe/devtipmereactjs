import { combineReducers } from "redux";
import auth from "./auth/authReducer";
import sideNavBar from "./sideNavBar/sideNavBarReducer";
import search from "./search/searchReducer";

export default combineReducers({ auth, sideNavBar, search });
