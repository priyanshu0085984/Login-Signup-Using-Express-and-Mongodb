const User = require('../models/User');


exports.createCred = async (req,res)=>{
    await User.find({email:req.body.email})
    .then((result)=>{
        if(result.length === 0){
            User.create(req.body)
            .then((result1)=>{
                res.status(200).json({
                    status:"success",
                    message:'Signup successful',
                    data: result1
                })
            })
            .catch((err)=>{
                res.status(400).json({
                    status:'fail',
                    message:'Something went wrong',
                    error:err
                })
            })
        }
        else{
            res.status(400).json({
                status:'fail',
                message:'Email already exists, try again with a different email'
            })
        }
    })
    .catch((err)=>{
        res.status(500).json({
            status:'fail',
            message:'Signup Error'
        })
    })
};