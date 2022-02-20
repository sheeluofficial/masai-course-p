const express = require("express")

const port  = 2344;
const app  = express()
const connect = require("./configs/db")
const userController = require("./controllers/user.controller")
const adminController = require("./controllers/admin.controller")
app.use(express.json());


app.use("/user",userController)
app.use("/admin",adminController)


app.listen(port,async ()=>{
    try{

        await connect()
    } catch(err) {
        console.log(err)
    }
    console.log(`server is running on port ${port}`)
})




