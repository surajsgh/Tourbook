const express = require("express");
const {
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} = require("./../Controllers/postsController");

const app = express();

// ROUTERS
const postsRouter = express.Router();

postsRouter.route("/").get(getAllPosts).post(createPost);
postsRouter.route("/:id").patch(updatePost).delete(deletePost);

postsRouter.route("/:id/likePost").patch(likePost);

// postsRouter.post("/", auth, createPost);
// postsRouter.patch("/:id", auth, updatePost);
// postsRouter.delete("/:id", auth, deletePost);
// postsRouter.patch("/:id/likePost", auth, likePost);

module.exports = postsRouter;
