const Post = require("../models/post.model")
const express = require("express")
const auth  = require("../middleware/auth")
const { body, validationResult } = require("express-validator")
const router = express.Router()
const jwt = require("jsonwebtoken")
const authorize = require("../middleware/authorise")

router.post("",auth,
body("title").notEmpty(),
body("body").notEmpty()
,async (req,res)=>{
try{
    const errors = validationResult(req) 

          if(!errors.isEmpty()) {
              return res.status(400).send({error:errors.array()})
          }


    req.body.user = req.user._id
    let post =await Post.create(req.body)

    return res.send(post)
} catch(err) {
    return res.status(500).send("error occured")
}

})


router.get("/:Id",auth,authorize,async (req,res)=>{
   try{

       let post = await Post.findById(req.params.Id).lean().exec()

       res.status(200).send(post)
   } catch(err) {
       res.status(400).send("not found")
   }


})

router.patch("/:Id",auth,authorize,async (req,res)=>{
   try{

       let post = await Post.findByIdAndUpdate(req.params.Id,req.body).lean().exec()

     return  res.status(200).send(post)
   } catch(err) {
       res.status(400).send("not found")
   }


})

router.delete("/:Id",auth,authorize,async (req,res)=>{
   try{

       let post = await Post.findByIdAndDelete(req.params.Id).lean().exec()

       res.status(200).send("deleted")
   } catch(err) {
       res.status(400).send("not found")
   }


})


module.exports = router