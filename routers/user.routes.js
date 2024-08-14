const express = require("express");

const userRotes = express.Router();

 const {addNewUser
    // , getAllUser,getUser,replaceUser,updateUser,deleteUser
} = require("../controller/user.controller")

userRotes.post("/user",addNewUser); 

// userRotes.get("/user",getAllUser);

// userRotes.get("/user/:id",getUser);

// userRotes.put("/user/:id",replaceUser)

// userRotes.patch("/user/:id",updateUser)

//  userRotes.delete("/user/:id",deleteUser);

module.exports = userRotes;