const express = require("express");
const morgan = require("morgan");
const app = express();
const products = require("./product.json");
// console.log(product);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended :false}));

app.get("/" ,(req,res) =>{
    res.send("welcome note prectise project");
});

//  create 
app.post("/product",(req,res) =>{
    // console.log(req.body);
    products.push(req.body)
    res.json({msg:'product added'})
    // res.json(product) // direct add to display our json data not require to get method
    
})
app.get('/product',(req,res) =>{
    res.json(products)
})

//   find single id as params
app.get('/product/:id' ,(req,res) =>{
    let id = +req.params.id
    let item = products.find((product) => product.id ===id)
    res.json(item)
})

//  replace 

app.put("/product/:id" ,(req,res) =>{
    let id=+req.params.id;
    let productindex = products.findIndex((item) => item.id === id);
    products.splice(productindex ,1,req.body);
    res.json({msg:"replace sucesss"});
})


app.patch("/product/:id",(req,res)=>{
    let id =+req.params.id;
    let productindex =products.findIndex((item) => item.id === id);
    let product = products[productindex];
    products.splice(productindex,1,{...product ,...req.body});
    res.json({msg:"update properlyy...."})
})

 app.delete("/product/:id",(req,res) =>{
    let id = +req.params.id;
   let  productindex = products.findIndex((item) => item.id === id);
    products.splice(productindex ,1);
    res.json({msg:"user detele"})
 })


app.listen(2525,() =>{
    console.log('server start at http://localhost:2525'); 
})