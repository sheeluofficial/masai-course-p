
const User = require("../models/user.model")

require("dotenv").config()

const jwt = require("jsonwebtoken")
const { body, validationResult } = require('express-validator');
const req = require("express/lib/request");
newToken = (user)=>{
    jwt.sign({user},"hi")
}

const register = async function(req,res) {


    try{

    let error = validationResult(req)
// let user = await User.findOne({email:req.body}
if(!error.isEmpty()) {
   return  res.send(error)
}
let profile_pic = req.file.path
// console.log(profile_pic,req.body)

// console.log(req.files)

let user = await User.create({
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    age:req.body.age,
    email:req.body.email,
    profileImages:profile_pic
})

let token = newToken(user)

return res.send(user,token)
        
    } catch(err){
        return res.send(err)
    }


}
const login = async function(_req,res) {

// let user = await User.findOne({email:req.body})

   let user = await User.findOne({email:req.body.email}).lean().exec()

   if(!user) {
     return  res.send("user does not exist")
   }

   if(user.password==req.body.password) {
    
     let token = newToken(user)

     return res.send(token)

   } 

   return  res.send("email or password is invalid")

}

module.exports = {register,login}