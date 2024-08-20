// const express = require("express");
// const morgan = require("morgan");
// const app = express();
// const  mongoose = require("mongoose")
//  const userRotes = require('./routers/user.routes')

// app.use(morgan("dev"));
// app.use(express.json());
// app.use(express.urlencoded({extended: false}));

//  app.get("/",(req,res) =>{
//     res.send("welcome to expres server");
//  });




// app.listen(3030,() =>{
//     mongoose.connect("mongodb://127.0.0.1:27017/node5to7")
//     .then(() => console.log("data base connection sucess...."))
//     .catch((err) => console.log(err))
//     console.log(`server start at http://localhost:3030`);
// });




















require('dotenv').config();
const express = require("express");
const morgan = require("morgan");
const app = express();
const mongoose = require('mongoose')
const productRoutes = require("./routers/product.routes")
const port = process.env.PORT;
// console.log(product);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended :false}));


app.get('/',(req,res) =>{
    res.send("Welcome to server")
})

 app.use("/api/user", userRotes)
app.use("/api/product" , productRoutes);

app.listen(port,() =>{

    mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log('database connection sucessfull'))
    .catch((err) => console.log(err));
    console.log(`server start at http://localhost:${port}`); 
});




