const User = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const handleLogin = async (req, res) => {
  const { name, password } = req.body;

  if (!name || !password)
    return res.status(400).json({ message: "name and password are required" });

  const user = await User.findOne({ name }).exec();

  if (!user) return res.status(402); //unauthorised
  const match = await bcrypt.compare(password, user.password);

  if (match) {
    //JWT
    const accessToken = jwt.sign(
      {
        username: user.name,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "360s" }
    );
    const refreshToken = jwt.sign(
      {
        username: user.name,
      },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );
    const updatedUserWithRefreshToken = await User.findOneAndUpdate(
      { name },
      { refreshToken }
    );

    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      sameSite: "None",
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json({
      sucess: `user ${name} logged in`,
      accessToken,
      roles: ["AT200"],
    });
  } else {
    res
      .status(401)
      .json({ sucess: false, message: "password did not matched" });
  }
};

module.exports = { handleLogin };
