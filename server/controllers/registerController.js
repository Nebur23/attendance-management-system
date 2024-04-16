const User = require("../model/User");
const bcrypt = require("bcrypt");

const createNewUser = async (req, res) => {
  const { name, password } = req.body;

  if (!name || !password)
    return res
      .status(400)
      .json({ success: false, message: "Name and password are required" });

  try {
    const existingUser = await User.findOne({ name }).exec();

    if (existingUser)
      return res
        .status(409) //conflict
        .json({
          success: false,
          message: "User with this name already exists",
        });

    const hashedPwd = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      password: hashedPwd,
    });

    res
      .status(201)
      .json({ success: true, message: `New user ${name} created` });
  } catch (error) {
    let errorMessage = "Something went wrong";

    if (error.code === 11000) {
      // MongoDB duplicate key error
      errorMessage = "User with this name already exists";
    } else if (error.name === "ValidationError") {
      errorMessage = error.message;
    }

    res.status(500).json({ success: false, message: errorMessage });
  }
};

module.exports = { createNewUser };
