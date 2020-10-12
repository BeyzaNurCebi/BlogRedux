import {
  add_blogpost,
  delete_blogpost,
  edit_blogpost,
} from "../store/actionTypes";

// export const addBlogPost = (dispatch) => {
//   return (title, content, callback) => {
//     dispatch({
//       type: add_blogpost,
//       payload: { title: title, content: content },
//     });
//     callback();
//   };
// };

export const addBlogPost = (title, content) => {

  console.log('add blog post', title,content)

  return {
    type: add_blogpost,
    payload: { title: title, content: content },
  };
};

export const deleteBlogPost = (id) => {
  return {
    type: delete_blogpost,
    payload: {id},
  };
};
