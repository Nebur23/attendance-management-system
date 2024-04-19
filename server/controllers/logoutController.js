const User = require("../model/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const handleLogout = async (req, res) => {
  // on client also delete access token
  const cookies = req.cookies;

  if (!cookies?.jwt) return res.sendStatus(204); //No content

  const refreshToken = cookies.jwt;

  // is refreshToken in db
  const user = await User.findOne({ refreshToken });
  if (!user) {
    res.clearCookie("jwt", {
      httpOnly: true,
      sameSite: "None",
      secure: true,
    });
    return res.sendStatus(204);
  }
  //Delete refreshToken in db

  const updatedUserWithRefreshToken = await User.findOneAndUpdate(
    { name: user.name },
    { refreshToken: "" }
  );

  res.clearCookie("jwt", {
    httpOnly: true,
    sameSite: "None",
    secure: true,
  });
  res.sendStatus(204);
};

module.exports = { handleLogout };
