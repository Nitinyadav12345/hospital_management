const express = require("express")
const db = require("../db")
const utils = require("../utils")
const config = require('../config')
const crypto = require("crypto-js")

const addEmployee =   (req, res) => {
    const {FIRSTNAME , LASTNAME , EMAIL , PASSWORD , PHONE , ROLE , DOJ , DOB ,SALARY } = req.body;
    let userId;
    console.log("employee called")
    const userQuery = "INSERT INTO USER(FIRSTNAME , LASTNAME , EMAIL , PASSWORD , PHONE , ROLE ) value(?,?,?,?,?,?)";
    const encryptedPassword = String(crypto.SHA256(PASSWORD));    
      db.pool.query(userQuery , [FIRSTNAME , LASTNAME , EMAIL , encryptedPassword , PHONE , ROLE],
        (err, userResult)=>{
            if(err){
                res.send(utils.createErrorResult(err))
            }
            console.log(userResult);
            userId = userResult.insertId;
            console.log("Values for employee query - DOJ:", DOJ, ", DOB:", DOB, ", SALARY:", SALARY, ", USERID:", userId);
            const employeeQuery = "insert into EMPLOYEE(DOJ , DOB ,SALARY ,USERID ) value(?,?,?,?)";
            //insert into EMPLOYEE(DOJ , DOB ,SALARY ,USERID ) value(2024-10-20,2001-10-20,6000,18)
             db.pool.query(employeeQuery , [DOJ , DOB ,SALARY ,userId],(err,employeeResult) =>{
                if(err){
                    console.error("Error inserting employee:", err);
                    res.send(utils.createErrorResult(err))
                }else{
                    console.log("Employee inserted:", employeeResult);
                    res.send(utils.createSuccessResult(employeeResult));
                }
            });
        }
    );

}

const addDoctor = (req,res) => {
    const {FIRSTNAME , LASTNAME , EMAIL , PASSWORD , PHONE , ROLE , DOJ , DOB ,SALARY ,CHARGES ,DEPARTMENT } = req.body;
    const userQuery = "INSERT INTO USER(FIRSTNAME , LASTNAME , EMAIL , PASSWORD , PHONE , ROLE ) value(?,?,?,?,?,?)";
    const encryptedPassword = String(crypto.SHA256(PASSWORD));    
    db.pool.query(userQuery , [FIRSTNAME , LASTNAME , EMAIL , encryptedPassword , PHONE , ROLE],
        (err, userResult)=>{
            if(err){
                return res.send(utils.createErrorResult(err))
            }
            const userId = userResult.insertId;
            const employeeQuery = "insert into EMPLOYEE(DOJ , DOB ,SALARY ,USERID ) value(?,?,?,?)";
            db.pool.query(employeeQuery , [DOJ , DOB ,SALARY ,userId],(err,employeeResult) =>{
                if(err){
                    return res.send(utils.createErrorResult(err))
                }
                const empid =employeeResult.insertId;
                const doctorQuery = "insert into DOCTOR(CHARGES, DEPARTMENT, EID) value(?,?,?,?)";
                db.pool.query(doctorQuery , [CHARGES ,DEPARTMENT,empid] ), (err,doctorResult) =>{
                   return res.send(utils.createResult(err,doctorResult));
                }
            });
        }
    );
}

const deleteUser = (req,res)=>{
    const {id} = req.id;
    const query = 'delete from user where uid = ?';
    db.pool.execute(query,[id],(err,result)=>{
        res.send(utils.createResult(err,result));
    })
}

module.exports = {
    addEmployee,
    addDoctor,
    deleteUser
}


// router.post('/addEmployee', )
// router.post('/addDoctor',)
// router.delete('deleteEmployee',)
//  router.get('/expenseDetails',)
// router.delete('/deleteDoctor')