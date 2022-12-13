const express = require('express');
const router = express.Router();
const SignupController = require('./../controller/SignupController');

router
    .route('/')
    .get(SignupController)
    .post()


module.exports = router;