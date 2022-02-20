     require("dotenv").config()
     const { body, validationResult } = require("express-validator")
const req = require("express/lib/request")
   const jwt = require("jsonwebtoken")
   const User = require("../models/user.model")
   const newToken = (user)=>{
       return jwt.sign({user},process.env.SECRET_KEY)
   }

    const register  = async (req,res)=>{
          
       try{

          const errors = validationResult(req) 

          if(!errors.isEmpty()) {
              return res.status(400).send({error:errors.array()})
          }

            let user =  await User.findOne({email:req.body.email}).lean().exec()
   
            if(user) {
                return res.status(400).send({error:"Yes",message:"User Already exist"})
            }   
             
            user = await User.create(req.body)

            let token =newToken(user)

          return  res.status(200).send({user,token})
   
       } catch(err) {
           return res.status(500).send({error:"Yes",message:"something went wrong"})
       }
    }

 const login = async (req,res) =>{
   try{
    let user = await User.findOne({email:req.body.email})

    if(!user) {
        return res.status(404).send("user not exist")
    } 

    let match = user.matchPass(req.body.password)
 
    if(!match) {
        return res.status(404).send("email or password is invalid")
    }



    let token = newToken(user)

    return  res.status(200).send({user,token})

} catch(err) {
    return res.status(500).send(err)
}

 }

    module.exports = {register,login,newToken}