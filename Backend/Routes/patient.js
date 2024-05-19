const express = require('express');
const { addAppointment, viewAppointments, viewPrescription, viewBill } = require('../Controller/patientController');
const router = express.Router();



router.post('/addappoint' , addAppointment);
router.get('/viewappointments', viewAppointments)
router.get('/viewPrescription',viewPrescription)
router.get('/viewBill',viewBill)


module.exports = router;