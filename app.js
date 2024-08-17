const express = require("express");
const morgan = require("morgan");
const app = express();
const  mongoose = require("mongoose")
 const userRotes = require('./routers/user.routes')

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

 app.get("/",(req,res) =>{
    res.send("welcome to expres server");
 });

 app.use("/api/user", userRotes)


app.listen(3030,() =>{
    mongoose.connect("mongodb://127.0.0.1:27017/node5to7")
    .then(() => console.log("data base connection sucess...."))
    .catch((err) => console.log(err))
    console.log(`server start at http://localhost:3030`);
});

























// const express = require("express");
// const morgan = require("morgan");
// const app = express();
// const mongoose = require('mongoose')
// const productRoutes = require("./routers/product.routes")
// // console.log(product);

// app.use(morgan("dev"));
// app.use(express.json());
// app.use(express.urlencoded({extended :false}));


// app.get('/',(req,res) =>{
//     res.send("Welcome to server")
// })

// app.use("/api/product" , productRoutes);

// app.listen(2525,() =>{

//     mongoose
//     .connect('mongodb://127.0.0.1:27017/productapi')
//     .then(() => console.log('database connection sucessfull'))
//     .catch((err) => console.log(err));
//     console.log('server start at http://localhost:2525'); 
// });




