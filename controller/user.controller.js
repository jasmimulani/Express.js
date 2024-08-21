  const User = require("../model/user.model")
   const bcrypt = require("bcrypt");

   exports.registerUser = async (req,res)=>{
    try{
        let user = await User.findOne({email: req.body.email , isDelete:false});
        if(user){
            return res.json({msg:"user already exist...."});
        }
        let hashPassword = await bcrypt.hash(req.body.password,10);
        // console.log(hashPassword);
        user =  await User.create({...req.body, password:hashPassword});

        res.status(201).json({user, msg:"register sucsses..."});
    }catch(err){
        console.log(err);
        res.status(500).json({msg:"internal server error"});
        
    }
   };



      exports.loginUser = async (req,res) =>{
        try{
            let user = await User.findOne({email: req.body.email , isDelete:false});
            if(!user){
                return res.json({msg:"user not found.."});
            }
            let comparedpassword = await bcrypt.compare(req.body.password,user.password);
            if(!comparedpassword){
                return res.json({msg:"incorrect pass or email..."})
            }
            res.status(200).json({msg:"login success",user});
        }catch (err){
            console.log(err);
            res.status(500).json({msg:"internal server error"});
        }
      }
