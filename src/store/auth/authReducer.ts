import { LOGIN, LOGOUT } from "./authTypes";

const initialState = { isLoggedIn: false };
export default function (state = initialState, action: any) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
}