import { AUTH } from "../constants/actionTypes";
import * as api from "../API/index.js";

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    router("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    console.log("2 Action>auth> inside signup formdata", formData);
    console.log("3 api.signUp(formData)==>", await api.signUp(formData));
    const { data } = await api.signUp(formData);

    console.log("post api.signUp(formData)", data);
    dispatch({ type: AUTH, data });

    router("/");
  } catch (error) {
    console.log(error);
  }
};
