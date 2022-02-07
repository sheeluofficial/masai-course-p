

let express  = require("express")
let router = express.Router()

const user = require("../models/user.model")
const crudController = require("./crud.controller")

router.post("",crudController(user).post)

module.exports = router