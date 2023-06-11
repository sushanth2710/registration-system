const express = require("express");
const { loginUser, registerUser } = require("../controller/UserController");


const app = express.Router();
app.post("/login", loginUser);
app.post("/register", registerUser);

module.exports = app;
