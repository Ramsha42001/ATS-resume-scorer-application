const res = require('express/lib/response')
const  { hashPassword , comparePassword } = require('../helpers/auth')
const User = require('../models/user')
const test = (req,res) =>{
    res.json('test is working')
}
const jwt = require('jsonwebtoken')
//login end-point
const loginUser = async (req,res) =>{
    try{
        const {email,password} = req.body;
        //check if user exist
        const user = await User.findOne({email})

        if(!user){
            return res.json({
                error : "No user found"
            })
        }
        //check password
        const match = await comparePassword(password,user.password)
        if(match){
            jwt.sign({email: user.email , id: user._id, name: user.name}, process.env.JWT_SECRET,{} , (err,token) =>{
                if(err) throw err;
                res.cookie('token' , token).json(user)
            })
            console.log("Login Success")
            res.json("Successful Login")
        }
        if(!match){
            res.json({
                error: "Passwords do not match"
            })
        }
    }catch(e){
        console.log(e);
    }
}

//register end-point
const registerUser = async (req,res) =>{
    try{
        const {name,email,password}= req.body; 
        // Check if name was entered
        if( !name ) return res.status(400).json({msg:'Please enter a username'});
        //Check for password and password length
        if(!password || password.length < 6){
            return res.json({
                error : "Password is required and it should be atleast 6 characters long"
            })
        }
        //Check email and if its valid
        const exist = await User.findOne({email})
        if(exist){
            return res.json({
                error : 'Email is already in use'
            })
        }
        const hashedPassword = await hashPassword(password)
        const user = await User.create({
            name , email , password : hashedPassword
        })
        return res.json(user);
    }catch(error){
        console.log("Error in registering the user");
    }
}

//profile end-point
const getProfile = (req, res) => {
    const { token } = req.cookies?.token || req.headers("Authorization")?.split(' ')[1] ;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
            if (err) {
                console.error('JWT verification error:', err);
                res.status(401).json({ error: 'Unauthorized' });
            } else {
                console.log('Token Created dn verified')
                res.json(user);
            }
        });
    } else {
        res.json(null);
    }
};

module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile,
}