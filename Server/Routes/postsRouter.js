const express = require("express");
const posts = require("./../Controllers/postsController");
// const cors = require("cors");
const app = express();

// app.use(cors());

// ROUTERS
const postsRouter = express.Router();

postsRouter.route("/").get(posts.getAllPosts);
postsRouter.route("/").post(posts.createPost);

module.exports = postsRouter;
