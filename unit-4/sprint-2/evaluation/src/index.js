const express = require("express")
const port     = 2345;
const app = express()
const connect = require("./configs/db")

const userController =  require("./controller/user.controller")
const branchController =  require("./controller/branchdetail.controller")
const masterController =  require("./controller/masteraccount.controller")
const savingController = require("./controller/savingaccount.controller")
const fixedController = require("./controller/fixedaccount.controller")

app.use("/masteraccount",masterController)
app.use("/savingaccount",savingController)
app.use("/fixedaccount",fixedController)
app.use("/branch",branchController)
app.use("/user",userController)



app.listen(port, async ()=>{
    
    try {
    await connect()
    console.log(`server is running on port ${port}`)
    }  catch(e) {
        console.log(e.message)
    }
})