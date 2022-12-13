const express = require('express');
const router = express.Router();
const loginController = require('./../controller/loginController');

router
    .route('/')
    .get(loginController.getAllCred);


module.exports = router;