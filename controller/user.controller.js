const users = require("../user.json")


exports.addNewUser = (req,res) =>{
    users.push(req.body);   
    res.json({msg:"user added"});
}

exports.getAllUser =(req,res) =>{
    res.json(users);
}

exports.getUser=(req,res) =>{
    let id= +req.params.id;
    let item = users.find((User) =>User.id === id)
    res.json(item);
}

exports.replaceUser=(req,res) =>{
    let id = +req.params.id;
    let userindex = users.findIndex((item) => item.id === id);
    users.splice(userindex , 1 , req.body);
    res.json({msg:'user replaced succesfully'});
}

exports.updateUser=(req,res) =>{
    let id = +req.params.id;
    let userindex = users.findIndex((item) => item.id === id);
     let user = users[userindex];
     users.splice(userindex , 1, {...user, ...req.body});
     res.json({msg:" user update succesfully"})
 }

 exports.deleteUser=(req,res) =>{
    let id = +req.params.id;
    let userindex = users.findIndex((item) => item.id ===id);
    users.splice(userindex,1);
    res.json({msg :"user delete sucsessss"});
 }