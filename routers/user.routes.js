const express = require("express");

const userRotes = express.Router();

 const { registerUser,  loginUser, getprofile, updateprofile, DeleteUser,
     changePassword
     } = require("../controller/user.controller");
const { verifyToken } = require("../helpers/verifyToken");
const { upload } = require("../helpers/imageUpload");

userRotes.post('/signup' , upload.single('profileImage'),registerUser);
userRotes.post('/signin' , loginUser);
userRotes.get('/me' , verifyToken,getprofile);
userRotes.put('/update' , verifyToken, updateprofile);
userRotes.delete('/delete' , verifyToken,DeleteUser);
userRotes.put('/pass' ,verifyToken,changePassword);
    
module.exports = userRotes;