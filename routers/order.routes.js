const express = require("express")
const orderRoutes = express.Router();

const{
    addNewOrder, cancelorder ,getorder
} = require("../controller/order.controller")
const{verifyToken} = require('../helpers/verifyToken');

orderRoutes.post("/",verifyToken,addNewOrder);
orderRoutes.delete('/' ,verifyToken,cancelorder );
orderRoutes.get('/' ,verifyToken,getorder );


module.exports= orderRoutes;