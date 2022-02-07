const User = require("../models/user.model")
const router = require("express").Router()

const crudController = require("./crud.controller")

router.post("",crudController(User).post)
router.get("/:Id",crudController(User).getOne)
router.get("",crudController(User).getAll)
router.patch("/:Id",crudController(User).updateOne)
router.delete("./Id",crudController(User).deleteOne)

module.exports = router;