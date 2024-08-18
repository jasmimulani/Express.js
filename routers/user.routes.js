const express = require("express");

const userRotes = express.Router();

 const {addNewUser, 
    getAllUser,
    getUser,
    updateUser,
    deleteUser
} = require("../controller/user.controller")

userRotes.post("/",addNewUser); 

userRotes.get("/",getAllUser);

userRotes.get("/get-user",getUser);


userRotes.put("/",updateUser)

 userRotes.delete("/",deleteUser);

module.exports = userRotes;