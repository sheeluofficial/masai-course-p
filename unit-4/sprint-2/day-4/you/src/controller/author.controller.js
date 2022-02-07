const router = require("express").Router()
const Author  = require("../models/author.model")

const crudController = require("./crud.controller")

router.post("",crudController(Author).post)
router.patch("/:Id",crudController(Author).updateOne)
router.delete("/:Id",crudController(Author).deleteOne)

router.get("/:Id", async (req,res) =>{
    try {
        const item = await Author.findById(req.params.Id).
        populate({path:"detail",select:["first_name","speciality"]}).lean().exec();

        return res.status(201).send(item);
    }
    catch(err) {
        return res.status(500).send(err.message)
    }
})



router.get("",async (req,res) =>{
    try{
        let items = await Author.find().
        populate({path:"detail",select:["first_name","last_name"]}).lean().exec()
        return res.status(201).send(items)

    } catch(err) {
        return res.status(500).send(err.message)
    }
})


module.exports = router;