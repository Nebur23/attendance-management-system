import express from 'express'
const app = express();
import { config } from 'dotenv';

config()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const connectDB = require("./db/conect");
const PORT = process.env.PORT || 8000;

//routes
app.use("/", require("./routes/api/root"));
app.use("/users", require("./routes/api/user"));
app.use("/students", require("./routes/api/student"));
app.use("/attendance", require("./routes/api/attendance"));

app.all("*", (req, res) => {
  res.status(404);
  res.send("404 page Not found!!!!");
});

app.listen(PORT, () => {
  console.log("server listening on port 8000");
  // connect to the database
  connectDB();
});
