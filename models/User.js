const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, 'A login must have a name']
    },
    email:{
        type:String,
        required: [true, 'A login must have an email'],
        unique: true
    },
    password:{
        type:String,
        required: [true, 'A login must have a password']
    }
});

const User = mongoose.model('User',UserSchema);

module.exports = User;