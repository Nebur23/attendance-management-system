const User = require("../model/User");

const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

const getUser = (req, res) => {};

const updateUser = (req, res) => {};

const deleteUser = (req, res) => {};

module.exports = {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
};
