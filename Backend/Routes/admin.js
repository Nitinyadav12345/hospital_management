const express = require("express")
const { addEmployee, addDoctor, deleteUser } = require("../Controller/adminController")
const router = express.Router()

router.post('/Employee',addEmployee);
router.post('/Doctor',addDoctor);
router.delete('/user',deleteUser)

module.exports = router;