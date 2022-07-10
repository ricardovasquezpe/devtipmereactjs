import { TOGGLE } from "./sideNavBarTypes";

const initialState = { isShowing: false };
export default function (state = initialState, action: any) {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE:
      return {
        ...state,
        isShowing: payload,
      };
    default:
      return state;
  }
}