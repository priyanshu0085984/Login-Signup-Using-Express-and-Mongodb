const User = require('../models/User');

exports.getAllCred = async(req,res)=>{

    const {email,password} =  req.query;
    User.find({email})
    .then((result)=>{
        console.log(result);
        if(result.length === 0){
            res.status(400).json({
                status:'fail',
                messsage:'User does not exist, try again with a different email'
            })
        }
        else if(result[0].password === password){
            res.status(200).json({
                status:'success',
                messsage:'Authentication Successful'
            })
        }
        else{
            res.status(400).json({
                status:'fail',
                message:'Authentication failed , check your password again'
            })
        }
    })
    .catch((err)=>{
        res.status(500).json({
            status:'DataBase error',
            message:'Login error'
        })
    })
};
