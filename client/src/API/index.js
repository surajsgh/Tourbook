import axios from "axios";

const url = "http://localhost:5000";
export const fetchPosts = () => axios.get(`${url}/posts`);
export const createPosts = (newPost) => axios.post(`${url}/posts`, newPost);
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/posts/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/posts/${id}`);
export const likePost = (id) => axios.patch(`${url}/posts/${id}/likePost`);

export const signIn = (formData) => axios.post(`${url}/users/signin`, formData);
export const signUp = (formData) => {
  console.log("4 inside api index.js for signup");
  axios.post(`${url}/users/signup`, formData);
};
