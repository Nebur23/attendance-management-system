const express = require("express");
const app = express();
const dotenv = require("dotenv");
const verifyJWT = require("./middlewares/verifyJwt");
const cookieParser = require("cookie-parser")

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())

const connectDB = require("./db/conect");
const PORT = process.env.PORT || 8000;

//routes
app.use("/", require("./routes/api/root"));
app.use("/register", require("./routes/api/register"));
app.use("/auth", require("./routes/api/auth"));
app.use("/students", require("./routes/api/student"));
app.use("/attendance", require("./routes/api/attendance"));
app.use("/refresh", require("./routes/api/refresh"));
app.use("/logout", require("./routes/api/logout"));

app.use(verifyJWT) // protected routes
app.use("/users", require("./routes/api/user"));
app.all("*", (req, res) => {
  res.status(404);
  res.send("404 page Not found!!!!");
});

app.listen(PORT, () => {
  console.log("server listening on port 8000");
  // connect to the database
  connectDB();
});
