const express = require("express");

const userRotes = express.Router();

 const { registerUser,  loginUser } = require("../controller/user.controller")

userRotes.post('/signup' , registerUser)
userRotes.post('/signin' , loginUser)

module.exports = userRotes;