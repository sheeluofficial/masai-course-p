
const express = require("express")
const { body, validationResult } = require("express-validator")
const user = require("../models/user.model")
const router = express.Router()

router.post("",
  body("first_name").notEmpty(),
  body("last_name").notEmpty(),
  async (req, res) => {
    try {
      const errors = validationResult(req)
      //  console.log(body("email"))
      if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() })
      }
      console.log(__dirname)
      // let item = await user.create(req.body)
      //         res.send(item)

    } catch (err) {
      return res.status(500).send(err.message)
    }
  })


module.exports = router