const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const tours = require("./Controllers/postsController");
const postsRouter = require("./Routes/postsRouter");

const app = express();

//  MIDDLEWARE
app.use(cors());
app.use(bodyParser.json({ limit: "10000kb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10000kb", extended: true }));

app.use(morgan("dev"));

app.use(express.json());

// app.use((req, res, next) => {
//   console.log("Logging...");
//   next();
// });

// const corsOptions = {
//   origin: "http://localhost:3000",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };

app.use("/posts", postsRouter);

module.exports = app;
