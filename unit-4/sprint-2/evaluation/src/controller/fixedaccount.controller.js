

let express  = require("express")
let router = express.Router()

const fixedAccount = require("../models/fixedaccount.model")
const crudController = require("./crud.controller")

router.post("",crudController(fixedAccount).post)


module.exports = router