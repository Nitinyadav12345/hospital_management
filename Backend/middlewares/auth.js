const jwt = require('jsonwebtoken')
const utils = require("../utils")
const config = require("../config")

const autherization = (req,res,next)=>{
    const arr = ['/user/login', '/user/register']
    if(arr.includes(req.url) ){
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
  }

  module.exports = {
    autherization,
  }