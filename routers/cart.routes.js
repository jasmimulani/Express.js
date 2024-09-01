const express = require('express');
const cartRoutes = express.Router();
const{
    addtocart,
    getAllcart,
    Deletecart,
    updatecart
} = require("../controller/carts.controller");
const { verifyToken } = require('../helpers/verifyToken');


cartRoutes.post("/",verifyToken,addtocart);
cartRoutes.get("/",verifyToken,getAllcart);
cartRoutes.put("/",verifyToken,updatecart);
cartRoutes.delete("/",verifyToken,Deletecart);


module.exports = cartRoutes