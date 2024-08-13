const express = require("express");
const morgan = require("morgan");
const app = express();
 const userRotes = require('./routers/user.routes')

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

 app.get("/",(req,res) =>{
    res.send("welcome to expres server");
 });

 app.use('/',userRotes)


app.listen(3030,() =>{
    console.log(`server start at http://localhost:3030`);
})
