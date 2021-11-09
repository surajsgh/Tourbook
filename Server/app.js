const express = require("express");
const morgan = require("morgan");

const tours = require("./Controllers/postsController");
const postsRouter = require("./Routes/postsRouter");

const app = express();

//  MIDDLEWARE
app.use(morgan("dev"));

app.use(express.json());

app.use((req, res, next) => {
  console.log("Logging...");
  next();
});

app.use("/api/v1/posts", postsRouter);

module.exports = app;
