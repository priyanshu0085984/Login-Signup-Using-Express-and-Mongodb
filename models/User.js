const mongoose = require('mongoose');
const validator = require('validator')
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, 'A login must have a name']
    },
    email:{
        type:String,
        required: [true, 'A login must have an email'],
        unique: true,
        // validate:[validator.isEmail,'Please provide a valid email']
    },
    password:{
        type:String,
        required: [true, 'A login must have a password'],
    }
});
// UserSchema.pre('save',async(next)=>{
//     if(!this.isModified('password')){
//         return next();
//     }
//     this.password = await bcrypt.hash(this.password,12)
// })
const User = mongoose.model('User',UserSchema);

module.exports = User;