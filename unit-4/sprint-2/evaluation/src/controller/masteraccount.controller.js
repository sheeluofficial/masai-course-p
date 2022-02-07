

let express  = require("express")
let router = express.Router()

const masterAccount = require("../models/masteraccount.model")
const crudController = require("./crud.controller")

router.post("",crudController(masterAccount).post)


module.exports = router