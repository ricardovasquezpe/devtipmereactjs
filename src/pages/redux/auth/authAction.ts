import { LOGIN, LOGOUT } from "../types";

export const onLogin = () => ({
  type: LOGIN,
});
export const onLogout = () => ({
  type: LOGOUT,
});