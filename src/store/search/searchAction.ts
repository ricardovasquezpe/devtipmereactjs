import { SEARCH } from "./searchTypes";

export const onSearch = (data: any) => ({
  type: SEARCH,
  payload: data
});