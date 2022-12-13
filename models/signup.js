const mongoose = require('mongoose');

const signupSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        required: [true, 'A login must have an email'],
        unique: true
    },
    password:{
        type:String,
        required: [true, 'A login must have a password'],
        unique: true
    }
});

const signup = mongoose.model('signup',signupSchema);

exports.module = signup;