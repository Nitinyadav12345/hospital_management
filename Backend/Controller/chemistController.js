const db = require('../db')
const utils = require('../utils')

const addMedicine = (req,res)=>{
    const { NAME , PRICE, QUANTITY , EXPIRYDATE , DETAILS , PHOTO} = req.body;
    const  statement = `insert into mediciene(NAME , PRICE, QUANTITY , EXPIRYDATE , DETAILS , PHOTO) value(?,?,?,?,?,?)`;
    db.pool.execute(
        statement,
        [NAME , PRICE, QUANTITY , EXPIRYDATE , DETAILS , PHOTO],
        (error , result) =>{
            res.send(utils.createResult(error,result));
        }
    )
}

const viewStock = (req,res)=>{
    const statement = `select * from mediciene`;
    db.pool.execute(
        statement,
        (error,result)=>{
            res.send(utils.createResult(error ,  result));
        }
    )
}

const addBill = (req , res)=>{
    const { FEES ,STATUS ,PID ,CATEGORY} = req.body;
    const statement = `insert into payment(FEES ,STATUS ,PID ,CATEGORY) value(?,?,?,?)`;
    db.pool.execute(
        statement,
        [FEES ,STATUS ,PID ,CATEGORY],
        (error , result)=>{
            res.send(utils.createResult(error,result));
        }
    )
}

const updateBillStatus = (req , res)=>{
    const { PAYID , STATUS}  = req.body;
    const statement = `update payment set STATUS = ? where PAYID = ?`;
        db.pool.execute(
            statement,
            [STATUS ,PAYID],
            (error , result) =>{
                res.send(utils.createResult(error , result));
            }

        )
}

module.exports = {
    addMedicine,
    viewStock,
    addBill,
    updateBillStatus
}