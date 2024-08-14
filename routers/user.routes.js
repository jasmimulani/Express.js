const express = require("express");

const userRotes = express.Router();

 const {addNewUser
    // , getAllUser,getUser,replaceUser,u pdateUser,deleteUser
} = require("../controller/user.controller")

userRotes.post("/",addNewUser); 

// userRotes.get("/",getAllUser);

// userRotes.get("/:id",getUser);

// userRotes.put("/:id",replaceUser)

// userRotes.patch("/:id",updateUser)

//  userRotes.delete("/:id",deleteUser);

module.exports = userRotes;