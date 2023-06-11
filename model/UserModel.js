const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "enter the distinct name"],
  },
  email: {
    type: String,
    required: [true, "enter the distinct email"],
  },
  password: {
    type: String,
    required: [true, "enter the distinct password"],
  },
  phoneno: {
    type: String,
    required: true,
  },
});

const usermodel=mongoose.model('users',userModel)
module.exports=usermodel;