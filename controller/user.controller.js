  const User = require("../model/user.model")
   const bcrypt = require("bcrypt");
   const jwt = require('jsonwebtoken')


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

            let token = await jwt.sign({userId:user._id},process.env.JWT_SECRET);
            console.log(token);  //token console log 
            
            
            res.status(200).json({msg:"login success..", user});
        }catch (err){
            console.log(err);
            res.status(500).json({msg:"internal server error"});
        }
      };

        exports.getprofile =  async(req,res)=>{
            try{
                res.json(req.user);
            }catch(err){
                console.log(err);
                res.status(500).json({msg:"server error"})
                
            }
        };

        exports.updateprofile = async (req,res)=>{
            try {
                  let user = req.user;
                  user = await User.findByIdAndUpdate(user._id,{$set:req.body},{new:true});
                  res.status(202).json({user, msg:"user profile updated..."})
            } catch (err) {
                console.log(err);
                res.status(500).json({ msg:"internal server error"})
                
            }
          }