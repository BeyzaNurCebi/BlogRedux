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

      console.log('current state', state)
      const blog_list = [...state.blog_list, {
        id: randomidGenerator(),
        title: action.payload.title,
        content: action.payload.content,
      }]
      
      return {
        blog_list
      };
    
    case delete_blogpost:

      const newList = state.blog_list.filter((item) => {

        console.log('removing', item.id, action)
        return item.id !== action.payload.id
      })
      console.log('deleted list', newList, action.payload)
      return {
        blog_list: newList
      }
    default:
      return state;
  }
};
