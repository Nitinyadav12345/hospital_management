
const express = require("express")
const db = require("../db")
const utils = require("../utils")
const router = express.Router();

router.post('/add' , (req,res)=>{
    const {DID , BLOODGROUP , DOB , PRESCRIPTION , PATIENT_PROBLEM , UID , BED_NO , DOA , DOD , IS_ADMIT_P , IS_DOCTOR_VISITED} = req.body;
    const statement = `insert into patient(DID , BLOODGROUP , DOB , PRESCRIPTION , PATIENT_PROBLEM , UID , BED_NO , DOA , DOD , IS_ADMIT_P , IS_DOCTOR_VISITED) value (?,?,?,?,?,?,?,?,?,?,?)`;
    db.pool.execute(
        statement,
        [DID , BLOODGROUP , DOB , PRESCRIPTION , PATIENT_PROBLEM , UID , BED_NO , DOA , DOD , IS_ADMIT_P , IS_DOCTOR_VISITED],
        (error , result)=>{
            res.send(utils.createResult(error,result));
        }
    )
});


router.put('/dischargePatient' , (req,res)=>{
    const {PID , DOD }  = req.body;
    const statement  = `update patient set  DOD = ? , BED_NO = 0 where PID = ? `;
    db.pool.execute(
        statement,
        [ DOD , PID ],
        (error , result) => {
            res.send(utils.createResult(error , result));
        }
    )
});


router.get('/genrateBill' , (req,res)=>{
    const {PID} = req.body;
    const statement = `select FEES , CATEGORY from PAYMENT where PID = ?`;
    db.pool.execute(
        statement,
        [PID],
        (error , result)=>{
            res.send(utils.createResult(error,result));
        }
    )
});

module.exports = router;