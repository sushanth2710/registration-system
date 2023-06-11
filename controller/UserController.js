const usermodel = require("../model/UserModel");
// const bcrypt = require('bcrypt')
// const encryptdata = bcrypt.hash(password, 10);
async function registerUser(req, res) {
  try {
    const newuser = new usermodel(req.body);
    await newuser.save();
    res.status(201).json({ sucess: true, newuser });
  } catch (error) {
    res.status(400).send("invalid operation");
    console.log(error);
  }
}

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const encryptdata = bcrypt.hash(password, 10);
    console.log(encryptdata);
    const user = await usermodel.findOne({ email, password });
    if (!user) {
      res.status(400).send("error in login");
      console.log("login failed");
    } else {
      res.status(200).json({ success: true, user });
      console.log("login sucessfull");
    }
  } catch (error) {
    res.status(400).send("invalid credentials");
    console.log(error);
  }
};
module.exports = { registerUser, loginUser };
