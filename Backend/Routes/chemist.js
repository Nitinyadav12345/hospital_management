const express  = require("express");
const { addMedicine, viewStock, updateBillStatus, addBill } = require("../Controller/chemistController");
const router = express.Router();

router.get('/viewStock', viewStock)

router.post('/addMedicien', addMedicine)

router.put('/updateBillStatus' , updateBillStatus)

router.post('/addBill' , addBill)

module.exports = router;