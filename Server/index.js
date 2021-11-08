const express = require("express");

const app = express();

//  MIDDLEWARE
app.use(express.json());

//  ROUTES WITH CONTROLLER
app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
  });
});

//  SERVER
const port = 3000;
app.listen(port, () => {
  console.log(`Running on the port ${port}`);
});
