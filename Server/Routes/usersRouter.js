const express = require("express");

const usersRouter = express();
const { signin, signup } = require("../Controllers/usersController.js");
// usersRouter.post("/signin", signin);
// usersRouter.post("/signup", signup);
console.log("inside usersRouter");
usersRouter.route("/signin").post(signin);
usersRouter.route("/signup").post(signup);

// usersRouter.post("/signin", function (req, res) {
//   signin;
// });
// usersRouter.post("/signup", function (req, res) {
//   signup;
// });
module.exports = usersRouter;
