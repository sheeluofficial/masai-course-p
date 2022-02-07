const router = require("express").Router()
const Book = require("../models/book.model")

const crudController = require("./crud.controller")

router.post("",crudController(Book).post)
router.patch("/:Id",crudController(Book).updateOne)
router.delete("/:Id",crudController(Book).deleteOne)

router.get("/:Id", async (req,res) =>{
    try {
        const item = await Book.findById(req.params.Id).
        populate({path:"writtenBy",select:["detail"],populate:[{path:"detail",select:["first_name","last_name"]}]}).populate({path:"section"}).lean().exec();

        return res.status(201).send(item);
    }
    catch(err) {
        return res.status(500).send(err.message)
    }
})

router.get("/author/:Id",async (req,res)=>{
    try {

        let items = await Book.find({writtenBy:req.params.Id}).lean().exec()
        res.status(201).send(items)
    } catch(err) {
        res.status(500).send(err.message)
    }
})
router.get("/section/:Id",async (req,res)=>{
    try {

        let items = await Book.find({section:req.params.Id}).lean().exec()
        res.status(201).send(items)
    } catch(err) {
        res.status(500).send(err.message)
    }
})


router.get("/author/:id1/section/:id2",async (req,res)=>{
    try {

        // let sectionid =req.query.section
        // let authorid =req.query.author

        console.log(req.query)

        let items = await Book.find({section:req.params.id2,writtenBy:req.params.id1}).lean().exec()
        res.status(201).send(items)
    } catch(err) {
        res.status(500).send(err.message)
    }
})



router.get("",async (req,res) =>{
    try{
        let items = await Book.find().
        populate({path:"writtenBy",select:["detail"],populate:[{path:"detail",select:["first_name","last_name"]}]}).populate({path:"section"}).lean().exec()
        return res.status(201).send(items)

    } catch(err) {
        return res.status(500).send(err.message)
    }
})



module.exports = router;