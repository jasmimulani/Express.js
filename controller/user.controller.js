  const User = require("../model/user.model")


exports.addNewUser = async(req,res) =>{
    try{
     let user = await User.findOne({email : req.body.email, isDelete:false});
        // console.log(user);
        if(user){
            return res.status(400).json({mes:"user alredy exist........"});
        }
        user = await User.create(req.body);
     res.status(201).json({user, msg:"user added......."})
    }catch(err) {
        console.log(err);
        res.status(500).json({ msg:'internal server error'})  
    }
};

exports.getAllUser = async (req,res) =>{
    try{
        let users =  await User.find({isDelete:false});
        res.status(200).json(users);
    }catch(err){
        console.log(err);
        res.status(500).json({msg:"internal servar error"})
        
    }
};

exports.getUser= async(req,res) =>{
    try{
        // let user = await User.findOne({firstName: req.query.firstName});
        let user = await User.findOne({firstName:"vansh"});


        // let user = await User.findOne({_id: req.query.userId});
        // let user = await User.findOne({_id:'66bca7498f5246ed3c6b5893'});

        // let user = await  User.findById(req.query.userId);
        // let user = await  User.findById("66bca77d8f5246ed3c6b5899");
        // console.log(user);
        if(!user){
            return res.status(404).json({msg:'user not found'});
        }
        res.status(200).json(user);
    }catch(err){
        console.log(err);
        res.status(500).json({msg:"internal server error"});
    }
};



exports.updateUser= async(req,res) =>{
    try{
        let user = await User.findById(req.query.userId);
        // console.log(user);
        if(!user){
            return res.status(404).json({msg:"user not found"});
        }
        user = await  User.findByIdAndUpdate(user._id,{$set:req.body},{new:true});
        res.status(202).json({user,msg:"user update sucess"});
    }catch(err){
        console.log(err);
        res.status(500).json({msg:"internal server error"})
        
    }
    
 }

 exports.deleteUser= async(req,res) =>{
  try{
    let user = await User.findOne({_id:req.query.userId ,isDelete:false});
    // console.log(user);
    if(!user){
        return res.status(404).json({msg:"user not found"});
    }
    user = await User.findByIdAndUpdate(user._Id , {isDelete:true},{new:true});
    // user = awiat Pro.findOneAndDelete(user._id)
        // user = awiat Pro.findByIdAndDelete(user._id)
        res.status(200).json({user, msg:"product delete.."})
  }catch(err){
    console.log(err);
    res.status(500).json({msg:"internal server error"})
    
  } 
}