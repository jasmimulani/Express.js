require('dotenv').config();
const express = require("express");
const morgan = require("morgan");
const app = express();
const mongoose = require('mongoose')
const productRoutes = require("./routers/product.routes")
 const userRotes = require('./routers/user.routes')
const port = process.env.PORT;
// console.log(product);
const  cors = require('cors');
const path = require('path');
const ejs = require('ejs')
const hbs = require('hbs')

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended :false}));

app.use("/public/images",express.static(path.join(__dirname,"public/images")))

 app.set("view engine" , ejs)
 app.set("view engine" , hbs)


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

