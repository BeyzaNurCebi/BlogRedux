import { initialState } from "./initialState";
import {
  add_blogpost,
  delete_blogpost,
  edit_blogpost,
} from "../store/actionTypes";

function randomidGenerator() {
  var S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (
    S4() +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    S4() +
    S4()
  );
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case add_blogpost:
      return [
        ...state,
        {
          id: randomidGenerator(),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case delete_blogpost:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};
