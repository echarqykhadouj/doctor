const express = require('express')
const { loginController, registerController } = require('../controllers/userCtrl');

//router onject 
const router = express.Router()

//routez
//LOGIN||post
router.post('/login', loginController) 

//REGISTER || POST
router.post('/register', registerController)
model.exports = router