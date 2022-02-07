const router = require("express").Router()
const Section = require("../models/section.model")

const crudController = require("./crud.controller")

router.post("",crudController(Section).post)
router.get("/:Id",crudController(Section).getOne)
router.get("",crudController(Section).getAll)
router.patch("/:Id",crudController(Section).updateOne)
router.delete("/:Id",crudController(Section).deleteOne)

module.exports = router;