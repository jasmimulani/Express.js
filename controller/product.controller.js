
// const products = require("../product.json");
const Pro = require ("../model/product_model");


exports.addNewProduct = async(req,res) =>{
   try{
    let product = await Pro.findOne({firstName: req.body.firstName ,isDelete:false}); 
    // console.log(product);

    if(product){
        return res.status(400).json({msg:"user alredy exist..."});
    }
    product = await Pro.create(req.body);
 res.status(201).json({product, msg:"user added......."})
}catch(err) {
    console.log(err);
    res.status(500).json({ msg:'internal server error'})  
}
   };


    
   exports.getAllProduct = async (req,res) =>{
    try{
        let product =  await Pro.find({isDelete: false});
        res.status(200).json(product);
    }catch(err){
        console.log(err);
        res.status(500).json({msg:"internal servar error"})
        
    }
};

exports.getProduct= async(req,res) =>{
    try{
        // let user = await Pro.findOne({firstName: req.query.firstName});
        let product = await Pro.findOne({firstName:"vansh"});
          // let product = await Pro.findOne({_id: req.query.productId});
        // let product = await Pro.findOne({_id:'66bca7498f5246ed3c6b5893'});

        // let product = await  Pro.findById(req.query.productId);
        // let product = await  Pro.findById("66bca77d8f5246ed3c6b5899");
        // console.log(product);

        if(!product){
            return res.status(404).json({msg:'product not found'});
        }
        res.status(200).json(product);
    }catch(err){
        console.log(err);
        res.status(500).json({msg:"internal server error"});
    }
};

exports.updateProduct= async(req,res)=>{
    try{
           let product = await Pro.findById(req.query.productId);
        //    console.log(product);
        if(!product){
            return res.status(404).json({msg:"product not found"});
        }
        product = await Pro.findByIdAndUpdate(product._id,{$set: req.body},{new:true});
        res.status(202).json({product,msg:" product update sucess"});
    }catch(err){
        console.log(err);
        res.status(500).json({msg:"internal server error"})
        
    }
}
   

exports.deleteProduct= async(req,res) =>{
    try{
        let product = await Pro.findOne({_id:req.query.productId , isDelete:false});
        // console.log(product);
        if(!product){
            return res.status(404).json({msg:"product not found"});
        }
        product = await Pro.findByIdAndUpdate(product._id,{isDelete:true},{new:true});
        // product = awiat Pro.findOneAndDelete(product._id)
        // product = awiat Pro.findByIdAndDelete(product._id)
        res.status(200).json({product, msg:"product delete sucsess"});
    }catch(err){
        console.log(err);
        res.status(500).json({msg:"internal sarver error"})

    }
 };