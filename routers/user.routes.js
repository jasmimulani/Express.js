const express = require("express");

const userRotes = express.Router();

 const { registerUser,  loginUser, getprofile, updateprofile, DeleteUser,
     changePassword,
     specialejs
     } = require("../controller/user.controller");
const { verifyToken } = require("../helpers/verifyToken");
const { upload } = require("../helpers/imageUpload");

userRotes.post('/signup' , upload.single('profileImage'),registerUser);
userRotes.post('/signin' , loginUser);
userRotes.get('/me' , verifyToken,getprofile);
userRotes.put('/update' , verifyToken, updateprofile);
userRotes.delete('/delete' , verifyToken,DeleteUser);
userRotes.put('/pass' ,verifyToken,changePassword);
userRotes.get('/' ,specialejs);
    
module.exports = userRotes;

// jasmi

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmQ2ZTgxNmMwY2EzN2IwM2QzZTI5NTciLCJpYXQiOjE3MjUzNjIyNDV9.Ji0mCI7gdUz4o_GRg-G4u9ZK5z3RpQngZCD5sDBM7s4 

// khanak
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmQ2ZTgyN2MwY2EzN2IwM2QzZTI5NWEiLCJpYXQiOjE3MjUzNjIyNzV9.BXVmLCQ1zZtxyQv08bkan4I9y_imhWkpFDYzyerwc98
