const express = require("express");
const morgan = require("morgan");
const app = express();
const productRoutes = require("./routers/product.routes")
// console.log(product);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended :false}));


app.get('/',(req,res) =>{
    res.send("Welcome to server")
})

app.use("/" , productRoutes);

app.listen(2525,() =>{
    console.log('server start at http://localhost:2525'); 
})