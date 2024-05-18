const express = require('express');
const { addAppointment } = require('../Controller/patientController');
const router = express.Router();

// patient/addappoint --post
// patient/viewappointments --get
// patient/viewPrescription --get
// patient/viewBill --get

router.post('/addappoint' , addAppointment);
// router.get('/viewappointments')
// router.get('/viewPrescription')
// router.get('/viewBill')


module.exports = router;