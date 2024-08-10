const express = require("express");
//   create server in express
const server = express();

//  const morgan = require('morgan');

//  server.use(morgan('dev'));
//  server.use(morgan('tiny'));
//  server.use(morgan('combine'));

//  const loggerfun =(req,res,next) =>{
//   console.log(req.ip,req.url,req.method)
//   next();

//  }
//  server.use(loggerfun)

// when express not provided to middelwatr that time people use to [body-parse]
//   body -parse use to express [4.x] down verson and [4] up verson express provide  middelware

//  Application-level middleware  //apply all the end points
// Router-level middleware    // applay only fix endpoint
// Error-handling middleware
// Built-in middleware     // there are 3 typrs of in-built middelware
// 1  -> express.json
//2. -> express.urlencoded
//3.  -> express.static
// Third-party middleware  ->  many tirdpary like cookie / morgen etc......

// -----------------------------------------------------------------------------
//  inbulit-middelware

server.use(express.json());    // postman ma  body -> raw -> json data 
server.use(express.urlencoded({ extended: false }));  //  ody -> x-ww-form-encoded -> key-value
// server.use("/hello",express.static('public'))

// public dir -> index.html file to be run
//  middelware function
const myfun = (req, res, next) => {
  // console.log(req.body);
  next();
  // if(req.query.age >=18){
  //   console.log(('sucesss......'));
  // }else{
  //   res.json({msg:"sorry try agin......."})
  // }
};
// server.use(myfun)  //application

server.get("/", (req, res) => {
  res.send("welcome to express");
  res.end();
});

server.post("/login", myfun, (req, res) => {
  // router-level middelvare
  res.write("welcom login page");
  res.end();
});

// server.post("/", (req, res) => {
//   res.send("<h1> this is post method </h1>");
// });

// server.listen(8000, () => {
//   console.log("server start at  http://localhost:8000");
// });
