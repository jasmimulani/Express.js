const express = require("express");
const morgan = require("morgan");
const app = express();
const users = require("./user.json")

// console.log(User);


app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

 app.get("/",(req,res) =>{
    res.send("welcome to expres server");
 });

//   crud operation in api
//  creat user

app.post("/user",(req,res) =>{
    // console.log(req.body)
    users.push(req.body);   
    res.json({msg:"user added"});
}); 

//  read - get all user                    //-> first of all get run and than post method run to localhost/user => reply aaded msg after that open new tab in post man and get localhost/user => display aaed person and than single argemnet  localhost/user/11
app.get("/user",(req,res) =>{
    res.json(users);
});

    //  get sigle user
    app.get("/user/:id",(req,res) =>{
        let id= +req.params.id;
        let item = users.find((User) =>User.id === id)
        res.json(item);
});

//  replace data - put

app.put("/user/:id",(req,res) =>{
    let id = +req.params.id;
    let userindex = users.findIndex((item) => item.id === id);
    users.splice(userindex , 1 , req.body);
    res.json({msg:'user replaced succesfully'});
})

//  update  data -patch

 app.patch("/user/:id",(req,res) =>{
    let id = +req.params.id;
    let userindex = users.findIndex((item) => item.id === id);
     let user = users[userindex];
     users.splice(userindex , 1, {...user, ...req.body});
     res.json({msg:" user update succesfully"})
 })


 app.delete("/user/:id",(req,res) =>{
    let id = +req.params.id;
    let userindex = users.findIndex((item) => item.id ===id);
    users.splice(userindex,1);
    res.json({msg :"user delete sucsessss"});
 });

app.listen(3030,() =>{
    console.log(`server start at http://localhost:3030`);
})