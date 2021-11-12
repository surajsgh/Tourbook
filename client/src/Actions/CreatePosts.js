import * as api from "./../API/index";

export const createPosts = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPosts(post);
    const result = data.result;
    console.log(result);
    dispatch({ type: "CREATE", payload: result });
  } catch (error) {
    console.log(error);
    console.log(error.message);
  }
};

export default createPosts;
