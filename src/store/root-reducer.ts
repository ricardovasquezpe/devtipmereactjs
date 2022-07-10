import { combineReducers } from "redux";
import auth from "./auth/authReducer";
import sideNavBar from "./sideNavBar/sideNavBarReducer";

export default combineReducers({ auth, sideNavBar });
