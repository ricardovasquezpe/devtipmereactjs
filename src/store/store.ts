/*import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./index";
const middleware = [thunk];
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;*/

import { createStore } from "redux";
import rootReducer from "./root-reducer";

const store = createStore(rootReducer);

export default store;
