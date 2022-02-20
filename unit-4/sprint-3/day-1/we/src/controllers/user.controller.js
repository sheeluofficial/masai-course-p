
const express = require("express")
const eventEmitter = require("events")
const myEmitter =new eventEmitter()
const admin = require("../models/admin.model")
 const user = require("../models/user.model")

const {verificationMail,mailToAdmin} = require("../utils")
const router = express.Router()

router.post("",async (req,res)=>{
    try{
       
      const userg =  await user.create(req.body)
        const adming = await admin.find({},{_id:0,email:1}).lean().exec()
        
        let adminMails = []
        adming.forEach((a)=>{
          adminMails.push(a.email)
        })

         myEmitter.on("user Registered",verificationMail)
         myEmitter.on("user Registered",mailToAdmin)

         myEmitter.emit("user Registered",userg,adminMails)
        
    res.status(201).send(adminMails)
        

    } catch(err) {
     return res.status(500).send(err.message)
    }
})


module.exports = router