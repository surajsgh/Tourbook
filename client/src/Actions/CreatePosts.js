import * as api from "./../API/index";

export const createPosts = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPosts(post);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
    console.log(error.message);
  }
};
