require('dotenv').config();
const express = require("express");
const morgan = require("morgan");
const app = express();
const mongoose = require('mongoose')
const productRoutes = require("./routers/product.routes")
 const userRotes = require('./routers/user.routes')
 const cartRoutes= require('./routers/cart.routes')
const port = process.env.PORT;
const nodemailler = require('nodemailer')
// console.log(product);
const  cors = require('cors');
const path = require('path');
const ejs = require('ejs')
const hbs = require('hbs');
const orderRoutes = require('./routers/order.routes');

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
app.use("/api/cart" , cartRoutes);
app.use("/api/order" , orderRoutes);

//  node mailer
const transporter = nodemailler.createTransport(
    {
        secure:true,
        host:'smtp.gmail.com',
        port:465,
        auth:{
            user:'jasmimulani@gmail.com',
            pass:'aqks uryt cnar wjgm'

        }
    }
);
function sendmail(to,sub,msg){
    transporter.sendMail(
        {
            to:to,
            sub:sub,
            html:msg
        });
        console.log('email sent');
        
}
  sendmail('jasmimulani@gmail.com',"interview"," Dear [Candidate's Name],I hope this message finds you well. We were impressed with your application for the [backend devloper]role at [Google], and we would like to invite you for an interview. ")

app.listen(port,() =>{

    mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log('database connection sucessfull'))
    .catch((err) => console.log(err));
    console.log(`server start at http://localhost:${port}`); 
});

