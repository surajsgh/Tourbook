const jwt = require("jsonwebtoken");
const secret = "test";

const auth = async (req, res, next) => {
  try {
    console.log("middle>auth", req.headers);
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    console.log("Middleware-token: ", token);
    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, secret);

      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }

    next();
  } catch (error) {
    console.log(error);
  }
};
module.exports = auth;
