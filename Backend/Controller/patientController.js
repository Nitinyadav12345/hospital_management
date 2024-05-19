// patient/addappoint --post
// patient/viewappointments --get
// patient/viewPrescription --get
// patient/viewBill --get

const db = require('../db');
const utils = require('../utils');

const addAppointment = (req , res)=>{
    const { STATUS , APPDATE , DID } = req.body;
    const statement  = `insert into appointment(STATUS , APPDATE , DID , PID) value(?,?,?,?)`;
    db.pool.execute(
        statement,
        [STATUS , APPDATE , DID , req.userId],
        (error , result) => {
            res.send(utils.createResult(error,result));
        }
    )
}

const viewAppointments = (req,res)=>{
    
    const statement = `select * from appointment`;
    db.pool.execute(
        statement,
        [res.userId],
        (error , result)=>{
            res.send(utils.createResult(error,result));
        }
    )

}

const viewPrescription = (req,res)=>{
    const statement = `select PRESCRIPTION from patient where PID = ?`;
    db.pool.execute(
        statement,
        [req.userId],
        (error , result)=>{
            res.send(utils.createResult(error,result));
        }
    )
}

const viewBill = (req ,res) =>{
    const statement = `select * from payment where PID = ?`;
    db.pool.execute(
        statement,
        [req.userId],
        (error , result) =>{
            res.send(utils.createResult(error,result));
        }
    )
}



module.exports = {
    addAppointment,
    viewAppointments,
    viewBill,
    viewPrescription
}