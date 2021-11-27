const express = require("express");
const {
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} = require("./../Controllers/postsController");

const { auth } = require("../middleware/auth");

// ROUTERS
const postsRouter = express.Router();

//const { post } = require("./usersRouter");

console.log("postsRouter auth:", auth);
//working code
postsRouter.route("/").get(getAllPosts).post(createPost);
postsRouter.route("/:id").patch(updatePost).delete(deletePost);
postsRouter.route("/:id/likePost").patch(likePost);

//code in project
// postsRouter.get("/", getAllPosts);
// postsRouter.post("/", auth, createPost);
// postsRouter.patch("/:id", auth, updatePost);
// postsRouter.delete("/:id", auth, deletePost);
// postsRouter.patch("/:id/likePost", auth, likePost);

module.exports = postsRouter;
