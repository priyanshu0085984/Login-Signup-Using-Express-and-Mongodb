const express = require('express');
const router = express.Router();
const SignupController = require('./../controller/SignupController');

router
    .route('/')
    .post(SignupController.createCred)

router.get('/',(req,res)=>{
    res.status(200).json({
        message:'hi'
    })
})

module.exports = router;