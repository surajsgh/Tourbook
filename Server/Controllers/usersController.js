const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserModal = require("../Models/usersModel.js");
const secret = "test";

exports.signin = async (req, res) => {
  console.log("inside usersController signin");
  const { email, password } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (!oldUser)
      return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: "1h",
    });

    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.signup = async (req, res) => {
  console.log("inside usersController signup");
  const { email, password, confirmPassword, firstName, lastName } = req.body;

  //console.log("Data");
  console.log(req.body);
  try {
    const oldUser = await UserModal.findOne({ email });

    console.log("inside signup olduser: ", oldUser);
    if (oldUser)
      return res.status(400).json({ message: "User already exists" });

    if (password !== confirmPassword)
      return res.status(400).json({ message: "Passwords don't match." });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModal.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, secret, {
      expiresIn: "1h",
    });

    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });

    console.log("in catch of signup usercontroller", error);
  }
};
// module.exports = signin;
// module.exports = signup;
