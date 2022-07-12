import { SEARCH } from "./searchTypes";

const initialState = { search: "" };
export default function (state = initialState, action: any) {
  const { type, payload } = action;
  switch (type) {
    case SEARCH:
      return {
        search: payload,
      };
    default:
      return state;
  }
}