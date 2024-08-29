  const User = require("../model/user.model")
   const bcrypt = require("bcrypt");
   const jwt = require('jsonwebtoken');
const { trace } = require("../routers/product.routes");


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
        let hashPassword = await bcrypt.hash(req.body.password , 10);
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
            
            
            res.status(200).json({msg:"login success..", token});
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

          exports.changePassword = async(req,res) =>{
            try {
            let  user = await User.findById(req.user._id);
              if(!user){
                return res.status(400).json({msg:"user not found"});
              }

              let {oldpassword,newpassword,confirmpassword} = req.body;

              let match = await bcrypt.compare(oldpassword,user.password)
              if(!match){
                return res.status(400).json({msg:"invalid old password"})
              }
  
              if(oldpassword === newpassword){
                return res.status(400).json({msg:"old and new password both are same"});
              }
            
              if(newpassword !== confirmpassword){
                return res.status(400).json({msg:" new and confirm password dont match"})
              }
              
              const hashenewpassword = await bcrypt.hash(newpassword,10);
                await User.findByIdAndUpdate(req.user._id,{password:hashenewpassword});
                res.status(200).json({msg:"password change succsessfullay!"})
        } catch (err) {
            console.log(err);
            res.status(500).json({msg:"internal server error"})
        }   
        };
  
          exports.specialejs = async (req,res)=>{
            try {
                      
                // let user ={
                //   firstName:"jasmi",
                //   lastName:"mulani",
                //   age:19,
                //   email:"jasmi@gmail.com",
                //   mobileNo:"1234567890"
                // }
                // res.render('user.ejs',{user});

                let user = await User.findOne({firstName: req.query.name , isDelete:false});
                if(!user){
                  return res.render('notfound.ejs');
                }
                  res.render('student.hbs',{user})
              
            } catch (err) {
                console.log(err);
                res.status(500).json({msg:"internal server error"})
                
            }
          }

                
     