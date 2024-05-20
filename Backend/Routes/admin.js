const express = require("express")
const { addEmployee } = require("../Controller/adminController")
const router = express.Router()

router.post('/addEmployee',addEmployee)
// router.post('/addDoctor',)
// router.delete('deleteEmployee',)
// router.get('/expenseDetails',)

module.exports = router;