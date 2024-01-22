const express = require('express'); 
const router = express.Router(); 

const userCtrl = require('../controllers/userController')

router.get('/', userCtrl.userList); 

module.exports = router;