
const express = require("express")
const auth  = require("../middleware/auth")
const Product = require("../models/product.model")
const router = express.Router()
const jwt = require("jsonwebtoken")
router.post("",auth,
  async (req, res) => {
    try {
        // console.log(req.user)
        let user_id = req.user._id
     const product = await Product.create({
         title:req.body.title,
         price:req.body.price,
         user_id: user_id
     })

   return  res.send(product)
     
    } catch (err) {
      return res.status(500).send(err.message)
    }
  })


module.exports = router