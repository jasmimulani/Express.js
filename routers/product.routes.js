const express = require("express");
const products = require("../product.json");
const productRoutes = express.Router();


productRoutes.post("/product",(req,res) =>{
    // console.log(req.body);
    products.push(req.body)
    res.json({msg:'product added'});
    
})

productRoutes.get('/product' ,(req,res) =>{
    res.json(products)
})

productRoutes.get('/product/:id' ,(req,res) =>{
    let id = +req.params.id
    let item = products.find((product) => product.id ===id)
    res.json(item)
})
productRoutes.put("/product/:id" ,(req,res) =>{
    let id=+req.params.id;
    let productindex = products.findIndex((item) => item.id === id);
    products.splice(productindex ,1,req.body);
    res.json({msg:"replace sucesss"});
})

productRoutes.patch("/product/:id",(req,res)=>{
    let id =+req.params.id;
    let productindex =products.findIndex((item) => item.id === id);
    let product = products[productindex];
    products.splice(productindex,1,{...product ,...req.body});
    res.json({msg:"update properlyy...."})
})

productRoutes.delete("/product/:id",(req,res) =>{
    let id = +req.params.id;
   let  productindex = products.findIndex((item) => item.id === id);
    products.splice(productindex ,1);
    res.json({msg:"user detele"})
 })

 module.exports = productRoutes;