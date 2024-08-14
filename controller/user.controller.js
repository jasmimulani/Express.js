const User = require("../model/user.model")


exports.addNewUser = async(req,res) =>{
    try{
     const  user = await User.create(req.body);
     res.status(201).json({user, msg:"user added......."})
        res.json({msg:"user added"});
    }catch(err) {
        console.log(err);
        res.status(500).json({ msg:'internal server error'})
        
    }
}

// exports.getAllUser =(req,res) =>{
//     res.json(users);
// }

// exports.getUser=(req,res) =>{
//     let id= +req.params.id;
//     let item = users.find((User) =>User.id === id)
//     res.json(item);
// }

// exports.replaceUser=(req,res) =>{
//     let id = +req.params.id;
//     let userindex = users.findIndex((item) => item.id === id);
//     users.splice(userindex , 1 , req.body);
//     res.json({msg:'user replaced succesfully'});
// }

// exports.updateUser=(req,res) =>{
//     let id = +req.params.id;
//     let userindex = users.findIndex((item) => item.id === id);
//      let user = users[userindex];
//      users.splice(userindex , 1, {...user, ...req.body});
//      res.json({msg:" user update succesfully"})
//  }

//  exports.deleteUser=(req,res) =>{
//     let id = +req.params.id;
//     let userindex = users.findIndex((item) => item.id ===id);
//     users.splice(userindex,1);
//     res.json({msg :"user delete sucsessss"});
//  }