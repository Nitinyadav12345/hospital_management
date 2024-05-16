const express = require("express")
const db = require("../db")
const utils = require("../utils")
const crypto = require("crypto-js")
const jwt = require("jsonwebtoken")
const config = require('../config')

const router = express.Router();

router.post('/register' , (req,res)=>{
    const {FIRSTNAME ,LASTNAME ,EMAIL ,PASSWORD ,PHONE ,ROLE , USERPHOTO  }  = req.body;
    const encryptedPassword = String(crypto.SHA256(PASSWORD));
    const statement = `insert into user(FIRSTNAME ,lastname ,EMAIL ,PASSWORD ,PHONE ,ROLE , USERPHOTO) value(?,?,?,?,?,?,?)`;
    db.pool.execute(statement,
        [FIRSTNAME ,LASTNAME ,EMAIL ,encryptedPassword ,PHONE ,ROLE , USERPHOTO],
        (error , result) =>{
            res.send(utils.createResult(error,result));    
        }
    )
})

router.post('/login' , (req,res)=>{
    const {EMAIL , PASSWORD} = req.body;
    const statement = `select UID , FIRSTNAME, LASTNAME, PHONE FROM user WHERE EMAIL = ? AND PASSWORD = ?`;
    const encryptedPassword = String(crypto.SHA256(PASSWORD));
    db.pool.execute(
        statement,
        [EMAIL, encryptedPassword],
        (error , users)=>{
            if(error){
                res.send(utils.createErrorResult(error));
            }
            else if(users.length === 0){
                res.send(utils.createErrorResult("User not found"));
            }else{
                const user = users[0];
                const payload = {id:user.UID};
                const token = jwt.sign(payload,config.secret)
                console.log(payload);
                const userData = {
                    token,
                    name:`${user['FIRSTNAME']} ${user['LASTNAME']}`
                }
                res.send(utils.createSuccessResult(userData));
            }
        }
    )
    
})

router.get('/profile' , (req,res)=>{
    const statement = `select UID , FIRSTNAME, LASTNAME, PHONE FROM user WHERE UID = ?`;
   // console.log(req.userId)
    db.pool.execute(
        statement,
        [req.userId],
        (error , result)=>{
            res.send(utils.createResult(error , result));
        }
    )
})

router.put('/profile' , (req,res)=>{
    const statement = `update user set FIRSTNAME = ? ,LASTNAME = ? ,PASSWORD = ? ,PHONE= ? ,ROLE = ? WHERE UID = ?`;
    const {FIRSTNAME , LASTNAME , PASSWORD , PHONE ,ROLE} = req.body;
    const encryptedPassword = String(crypto.SHA256(PASSWORD));
    console.log(req.userId)
    db.pool.execute(
        statement,
        [FIRSTNAME , LASTNAME ,  encryptedPassword , PHONE ,ROLE , req.userId],
        (err , result)=>{
            res.send(utils.createResult(err ,result));
        }
    )
})

//update user set FIRSTNAME = "Nitin" ,LASTNAME = "yadav" ,EMAIL = "test@test.com" ,PASSWORD = "test" ,PHONE= "7599977737" ,ROLE = "plumber" WHERE UID = 

module.exports = router;
