const User = require("../models/user.model")
const express = require("express")

const router = express.Router()


router.get("",async (req,res)=>{
    try{

        let user = await User.find().lean().exec()
        return res.render("users/index.ejs", { users })
    } catch(err) {
        return  res.status(500).send(err)
    }
})

module.exports = router