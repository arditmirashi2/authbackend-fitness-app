const express=require('express');
const router=express.Router();

// Importing the login and register controllers
const auth=require('../controllers/controllers');

router.post('/register',auth.register);
router.post('/login',auth.login);


module.exports=router;