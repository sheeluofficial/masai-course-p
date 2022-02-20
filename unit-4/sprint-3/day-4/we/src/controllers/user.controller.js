
const express = require("express")

const user = require("../models/user.model")
const router = express.Router()

router.post("",
  async (req, res) => {
    try {
  

    } catch (err) {
      return res.status(500).send(err.message)
    }
  })


module.exports = router