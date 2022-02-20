
const express = require("express")
const router = express.Router()
const admin = require("../models/admin.model")

router.post("",async (req,res)=>{
    try{
       
      const user =  await admin.create(req.body)
        
       
        
    res.status(201).send(user)
        

    } catch(err) {
     return res.status(500).send(err.message)
    }
})


module.exports = router