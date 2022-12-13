const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema(
    {
        email:{
            type:String,
            required: [true, 'A login must have an email'],
            unique: true
        },
        password:{
            type:String,
            required: [true, 'A login must have a password']
        }
    }
);

const login = mongoose.model('login',loginSchema);

module.exports = login;