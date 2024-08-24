  const User = require("../model/user.model")
   const bcrypt = require("bcrypt");
   const jwt = require('jsonwebtoken');


   exports.registerUser = async (req,res)=>{
    try{
        let imagepath = " "; 
        let user = await User.findOne({email: req.body.email , isDelete:false});
        if(user){
            return res.json({msg:"user already exist...."});
        }
        if(req.file){
            // console.log(req.file);
            
            imagepath = req.file.path.replace(/\\/g,"/")
        }
        let hashPassword = await bcrypt.hash(req.body.password,10);
        // console.log(hashPassword);
        user =  await User.create({...req.body, password:hashPassword,profileImage:imagepath});

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


          exports.DeleteUser = async(req,res)=>{
            try{
                let user= req.user;
                user = await User.findByIdAndUpdate(user._id,{isDelete:true},{new:true});
                res.status(200).json({msg:"user delete sucsess..."})
            }catch(err){
                  console.log(err);
                  res.status(500).json({msg:"internal server error"})
                  
            }
          }

        //   exports.changePassword = async(req,res) =>{
        //     try {
        //       let user = await User.findOne({email:req.body.email,isDelete:false});
        //       if(!user){
        //         return res.json({msg:"user not found"});
        //       }
        //       let oldpass = await bcrypt.compare(req.body.password,user.password);
        //       if(!oldpass){
        //         return res.json({msg:"oldpss don't match"})
        //       }
        //       res.status(202).json({msg:"pass is match"})

        //       let newpass = await bcrypt.compare(oldpass.password , newpass.pass);
        //       if(!newpass){
        //         return res.json({msg:"sucess..enter confirm pass"})
        //       }
        //       res.status(202).json({msg:"old and new pass match"})
            
        // } catch (err) {
        //     console.log(err);
        //     res.status(500).json({msg:"internal server error"})
        // }   
        // };
  

                
