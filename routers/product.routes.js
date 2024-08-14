const express = require("express");
const productRoutes = express.Router();
const {addNewUser
    ,getAllUser,getUser,replaceUser,updateUser,deleteUser
    } = require('../controller/product.controller')
productRoutes.post("/product",addNewUser)

productRoutes.get('/product' ,getAllUser)

productRoutes.get('/product/:id' ,getUser)

productRoutes.put("/product/:id" ,replaceUser)

productRoutes.patch("/product/:id",updateUser)

productRoutes.delete("/product/:id",deleteUser)

 module.exports = productRoutes;