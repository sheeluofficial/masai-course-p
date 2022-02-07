

let express  = require("express")
let router = express.Router()

const fixedAccount = require("../models/fixedaccount.model")
const crudController = require("./crud.controller")
const masterAccount = require("../models/masteraccount.model")
router.post("", async (req,res)=>{
    try{
                 
           const item = await fixedAccount.create(req.body)

           let balance = item.balance
           let _id = item.masterAccount;

           const accountm = await masterAccount.findById(_id)
           accountm = JSON.parse(accountm)

        balance =    accountm.balance + balance;

           await masterAccount.findByIdAndUpdate(_id,{balance:balance})

         return   res.status(201).send(item) 
    }    catch(err) {
        return res.status(500).send(err.message)
    }
    })


module.exports = router