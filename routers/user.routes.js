const express = require("express");

const userRotes = express.Router();

 const { registerUser,  loginUser, getprofile, updateprofile } = require("../controller/user.controller");
const { verifyToken } = require("../helpers/verifyToken");

userRotes.post('/signup' , registerUser);
userRotes.post('/signin' , loginUser);
userRotes.get('/me' , verifyToken,getprofile);
userRotes.put('/update' , verifyToken, updateprofile);

module.exports = userRotes;