const express = require("express");
const productRoutes = express.Router();
const {addNewUser
    ,getAllUser,getUser,replaceUser,updateUser,deleteUser
    } = require('../controller/product.controller')
productRoutes.post("/",addNewUser)

productRoutes.get('/' ,getAllUser)

productRoutes.get('/:id' ,getUser)

productRoutes.put("/:id" ,replaceUser)

productRoutes.patch("/:id",updateUser)

productRoutes.delete("/:id",deleteUser)

 module.exports = productRoutes;