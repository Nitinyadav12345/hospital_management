
const express = require("express");
const { addPatient, dischargePatient, genrateBill } = require("../Controller/receptionistController");
const { route } = require("./user");

const router = express.Router();

router.post('/add' ,addPatient);


router.put('/dischargePatient' , dischargePatient);


router.get('/genrateBill' , genrateBill);

module.exports = router;