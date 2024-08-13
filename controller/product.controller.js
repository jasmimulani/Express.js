
const products = require("../product.json");


exports.addNewUser =(req,res) =>{
    // console.log(req.body);
    products.push(req.body)
    res.json({msg:'product added'});
    
}
exports.getAllUser =(req,res) =>{
    res.json(products)
}

exports.getUser =(req,res) =>{
    let id = +req.params.id
    let item = products.find((product) => product.id ===id)
    res.json(item)
}

exports.replaceUser =(req,res) =>{
    let id=+req.params.id;
    let productindex = products.findIndex((item) => item.id === id);
    products.splice(productindex ,1,req.body);
    res.json({msg:"replace sucesss"});
}

exports.updateUser=(req,res)=>{
    let id =+req.params.id;
    let productindex =products.findIndex((item) => item.id === id);
    let product = products[productindex];
    products.splice(productindex,1,{...product ,...req.body});
    res.json({msg:"update properlyy...."})
}

exports.deleteUser=(req,res) =>{
    let id = +req.params.id;
   let  productindex = products.findIndex((item) => item.id === id);
    products.splice(productindex ,1);
    res.json({msg:"user detele"})
 }