const User = require("../model/User");
const bcrypt = require("bcrypt");

const getAllUsers = (req, res) => {
  res.send("users route");
};

const getUser = (req, res) => {};

const createNewUser = async (req, res) => {
  const { name, password } = req.body;

  if (!name || !password)
    return res.status(400).json({ message: "name and password are required" });

  const duplicate = await User.findOne({ name }).exec();

  if (duplicate) return res.status(409); //conflict

  try {
    const hashedPwd = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      password: hashedPwd,
    });
    console.log(newUser);
    res.status(201).json({ sucess: `New user ${name} created` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUser = (req, res) => {};

const deleteUser = (req, res) => {};

module.exports = {
  getAllUsers,
  createNewUser,
  getUser,
  updateUser,
  deleteUser,
};
