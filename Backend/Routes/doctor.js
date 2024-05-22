const express = require("express")
const {viewAppointments,
    viewPatients,
    viewDiagnosis,
    addPrescription } = require("../Controller/doctorController")
const router = express.Router()

router.get('/viewAppointments', viewAppointments)
router.get('/viewPatients', viewPatients)
router.get('/viewDiagnosis', viewDiagnosis)
router.post('/addPrescription', addPrescription)




module.exports = router;