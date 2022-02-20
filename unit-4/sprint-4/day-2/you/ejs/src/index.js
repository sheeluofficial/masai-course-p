const express = require("express")
const User = require("./models/user.model")
const app = express()


const port = 2345
const connect = require("./configs/db")



const usersController = require("./controllers/user.controller")

app.use(express.json())
app.set("view engine","ejs")

app.use(express.static("public"))
// app.post("/register",register)

// app.post("/login",login)

app.use("/user",usersController)






app.listen(port, async ()=>{
    await connect()

    console.log(`server is connected on port ${port}`)
    
})