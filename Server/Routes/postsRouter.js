const express = require("express");
const posts = require("./../Controllers/postsController");

const app = express();

// ROUTERS
const postsRouter = express.Router();

postsRouter.route("/").get(posts.getAllPosts);
postsRouter.route("/").post(posts.createPost);

module.exports = postsRouter;
