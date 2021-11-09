const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: `${__dirname}/config.env` });
const app = require("./app");

const DB = process.env.DATABASE.replace(
  `<DATABASE_PASSWORD>`,
  process.env.DATABASE_PASSWORD
);

//  Returns the promise
mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log("Connection Successful..."))
  .catch((error) => console.log(error));

//  SERVER
app.listen(process.env.PORT, () => {
  console.log(`Server is running...`);
});
