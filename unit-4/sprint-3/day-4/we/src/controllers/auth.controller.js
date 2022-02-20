
// const express = require("express")
// const router = express.Router()
require("dotenv").config()
const User = require("../models/user.model")
const jwt = require("jsonwebtoken")
const newToken = (user)=>{
    return jwt.sign({user},process.env.JWT_SECRET_KEY)
}



const register = async (req,res)=> {
    try {
  
    //    we will try to find the user with the email provided

    let  user = await User.findOne({email:req.body.email}).lean().exec()

    // if te user is found then it is an error
      
    if(user) {
        res.status(400).send("User already exist")
    }

    // if user is not found we will create the user with given credential

        user = await User.create(req.body)

    // then we will hash the password to make it secure
        
    const token = newToken(user)

    res.send({user,token})
       
    // then we will create the token for user

       
    // then return the user and token

    } catch (err) {
      return res.status(500).send(err.message)
    }
}

const login = async  (req,res)=> {
    try {
//    we will find the user with email provided
    
     let user = await User.findOne({email:req.body.email})

// if user is not foud we will throw error 
 
if(!user) {
  return  res.status(400).send({error:"Yes",message:"User does not exist"})
}

// if user is found we will match password 

  let match = user.matchPass(req.body.password)
// if password does not match throw an error

    if(!match) {
      return  res.status(400).send({error:"Yes",message:"password or email is invalid"})
    }
// if password is same we will create token 

      let token = newToken(user)

      res.status(200).send({user,token})

    } catch (err) {
      return res.status(500).send(err.message)
    }
}





module.exports = {register,login}