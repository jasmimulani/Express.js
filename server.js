const  express = require('express')

//   create server in express
 const server = express();

//   import json file
const fs = require ('fs');
const data = fs.readFileSync('./user.json','utf-8');
// console.log(data);



//   post,   -> create 
//  get, => redrive or get
// put,  ---------> update
//  patch , ------->
//  delete -> delete

server.get('/',(req, res) =>{
    res.send('welcome to express');
    res.end()
  });

  // server.get('/',(req, res) =>{   //-----------> same end point and same get method so that time alway 1st code is executed..........
  //   res.send('welcome to express');
  //   res.end()
  // });

  server.post('/',(req,res) =>{
    // res.write('use write method server end complesory')
    res.send('<h1> post method not end server to complsory</h1>')
  })

  server.put("/",(req,res) =>{
    res.json({msg:"hello this os json formate data"})
  })

    server.patch('/' ,(req,res) =>{
      res.status(250);
      res.json({msg:"hello this os json formate data"})
    })

    server.get('/user',(req,res) =>{
         res.json(JSON.parse(data));
    })

    server.get('/login' ,(req,res)=>{
    res.write('welcom login page')
    res.end()
    })

   server.listen(8000,() =>{
    console.log('server start at  http://localhost:8000');
   });