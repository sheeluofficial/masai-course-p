
const express = require("express")
const {body,validationResult} = require("express-validator")
const user = require("../models/user.model")
const router = express.Router()

router.post("",
body("email").notEmpty()
.bail()
.isEmail(),
body("first_name").notEmpty(),
body("last_name").notEmpty(),
body("pincode").notEmpty().isLength({min:6,max:6}),
body("age").notEmpty().isInt({min:1,max:100}),
body("gender").notEmpty().bail().
custom((value)=>{
  if(value=="male"||value=="female"||value=="others") {
    return true
  } else {
    throw new Error("enter valid gender")
  }
}),

async (req,res)=>{
    try{
const errors = validationResult(req)
//  console.log(body("email"))
if(!errors.isEmpty()) {
 return res.status(400).send({errors:errors.array()})
}

let item = await user.create(req.body)
        res.send(item)

    } catch(err) {
     return res.status(500).send(err.message)
    }
})


module.exports = router