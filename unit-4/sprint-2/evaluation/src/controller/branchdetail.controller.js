

let express  = require("express")
let router = express.Router()

const branch = require("../models/branchdetail.model")
const crudController = require("./crud.controller")

router.post("",crudController(branch).post)

module.exports = router