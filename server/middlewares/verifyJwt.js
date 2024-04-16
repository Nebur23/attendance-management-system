const jwt = require("jsonwebtoken");
require("dotenv").config();

// for protectedv routes
const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (!authHeader?.startswith('Bearer ')) return res.sendStatus(401);

  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403); // Forbidden
    req.user = decoded.username;
    next();
  });
};

module.exports = verifyJWT;
