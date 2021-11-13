const express = require("express");
const {
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
} = require("./../Controllers/postsController");

const app = express();

// ROUTERS
const postsRouter = express.Router();

postsRouter.route("/").get(getAllPosts).post(createPost);
postsRouter.route("/:id").patch(updatePost).delete(deletePost);

module.exports = postsRouter;
