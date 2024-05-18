const express = require("express")
const { register, login,  getProfile, updateProfile } = require("../Controller/userController")
const router = express.Router();

router.post('/register' , register)

router.post('/login' , login)

router.get('/profile' , getProfile)

router.put('/profile' ,updateProfile)

module.exports = router;
