const express = require("express");

const userRotes = express.Router();
const users = require("../user.json")

userRotes.post("/user",(req,res) =>{
    // console.log(req.body)
    users.push(req.body);   
    res.json({msg:"user added"});
}); 

userRotes.get("/user",(req,res) =>{
    res.json(users);
});

userRotes.get("/user/:id",(req,res) =>{
    let id= +req.params.id;
    let item = users.find((User) =>User.id === id)
    res.json(item);
});

userRotes.put("/user/:id",(req,res) =>{
    let id = +req.params.id;
    let userindex = users.findIndex((item) => item.id === id);
    users.splice(userindex , 1 , req.body);
    res.json({msg:'user replaced succesfully'});
})

userRotes.patch("/user/:id",(req,res) =>{
    let id = +req.params.id;
    let userindex = users.findIndex((item) => item.id === id);
     let user = users[userindex];
     users.splice(userindex , 1, {...user, ...req.body});
     res.json({msg:" user update succesfully"})
 })

 userRotes.delete("/user/:id",(req,res) =>{
    let id = +req.params.id;
    let userindex = users.findIndex((item) => item.id ===id);
    users.splice(userindex,1);
    res.json({msg :"user delete sucsessss"});
 });

module.exports = userRotes;