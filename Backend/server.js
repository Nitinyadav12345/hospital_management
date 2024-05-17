const express = require("express")
const cors = require("cors")
const jwt = require('jsonwebtoken')
const utils = require("./utils")
const app = express()
const config = require("./config")

//middle-wares
app.use(cors())
app.use(express.json())

app.use((req,res,next)=>{
  if(
    req.url === '/user/login' || req.url === '/user/register'
  ){
    next()
  }
  else{
    const token = req.headers['token']
    if(!token || token.length === 0){
      res.send(utils.createErrorResult('missing token'))
    }else{
      try{
      //console.log(token)
      const payload = jwt.verify(token , config.secret)
      req.userId = payload['id']
      //console.log(payload)
      next()
      }catch(ex){
        res.send(utils.createErrorResult('invalid token'))
      }
    }
  }
})

const userRouter = require('./Routes/user');
const receptionistRouter = require('./Routes/Receptionist')

app.use('/user' , userRouter);
app.use('/Receptionist' , receptionistRouter)

app.listen(4000,'0.0.0.0',()=>{
    console.log(`server started on port 4000`)
});