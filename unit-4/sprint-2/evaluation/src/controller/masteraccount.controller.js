

let express  = require("express")
const path = require("path/posix")
let router = express.Router()

const masterAccount = require("../models/masteraccount.model")
const crudController = require("./crud.controller")
const savingAccount = require("../models/savingaccount.model")
const fixedAccount = require("../models/fixedaccount.model")

router.post("",crudController(masterAccount).post)
router.get("/:Id",async (req,res)=>{

    try{

     let account = await masterAccount.findById(req.params.Id)
     .populate({path:"relationshipManager"}).
     populate({path:"branch"}).
     populate({path:"user"})
     .lean().exec()
     return res.status(201).send(account)
    } catch(err) {
        return res.status(500).send(err)
    }

})
router.get("/getall/:Id",async (req,res)=>{
    
    try{
    const saving = await savingAccount.find({ masterAccount:req.params.Id},{account_number:1,balance:1}).lean().exec()
    const fixed = await fixedAccount.find({ masterAccount:req.params.Id},{account_number:1,balance:1}).lean().exec()
    
    const allaccount =[...saving,...fixed]
    
    return res.status(201).send(allaccount)
    }
    catch(err) {
        return res.status(500).send(err)
    }


})


module.exports = router