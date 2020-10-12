import { createStore, combineReducers } from "redux";
import { reducer } from "./reducer";

// const rootReducer = combineReducers({
//   reducer: reducer,
// });

// export const store = createStore(reducer);

export default () => {
  return createStore(reducer)
}
