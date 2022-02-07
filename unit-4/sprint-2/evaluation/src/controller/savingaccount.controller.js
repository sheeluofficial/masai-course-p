

let express  = require("express")
let router = express.Router()

const savingAccount = require("../models/savingaccount.model")
const crudController = require("./crud.controller")

router.post("",crudController(savingAccount).post)


module.exports = router