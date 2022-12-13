const express = require('express');
const router = express.Router();
const SignupController = require('./../controller/SignupController');

router
    .route('/')
    .post(SignupController.createCred)


module.exports = router;