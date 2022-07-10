import { TOGGLE } from "./sideNavBarTypes";

export const onToggle = (data: any) => ({
  type: TOGGLE,
  payload: data
});