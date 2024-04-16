// create a connection to our MongoDB database
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Successfully connected to database");
  } catch (error) {
    console.error(error);
    console.log("database connection failed. exiting now...");
    process.exit(1);
  }
};

module.exports = connectDB;
