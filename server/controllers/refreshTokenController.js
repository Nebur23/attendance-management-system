const User = require("../model/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const handleReFreshToken = async (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.jwt) return res.sendStatus(401);


  const refreshToken = cookies.jwt;

  const user = await User.findOne({ refreshToken });
  if (!user) return res.sendStatus(403); // Forbidden;
  //evaluate jwt
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decode) => {
    if (err || user.name !== decode.username) return res.sendStatus(403);
    const accessToken = jwt.sign(
      {
        username: decode.username,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "360s" }
    );

    res.json({ accessToken });
  });
};

module.exports = { handleReFreshToken };
