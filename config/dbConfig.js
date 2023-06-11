const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const getConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connection successfulll");
    console.log(`server running on ${mongoose.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = getConnection;
