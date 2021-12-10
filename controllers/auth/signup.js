const { Conflict } = require("http-errors");
const bcrypt = require("bcrypt");

const { User } = require("../../models");

const signup = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict("Email in use");
  }

  const newUser = new User({ email });

  await newUser.save();

  res.status(201).json({
    status: "success",
    // code: 201,
    // data: {
    // user: {
    //   email,
    // },
    // },
  });
};

module.exports = signup;
