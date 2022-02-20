const express = require("express")

const port  = 2344;
const app  = express()
const connect = require("./configs/db")
// const userController = require("./controllers/user.controller")
app.use(express.json());

const {register,login} = require("./controllers/auth.controller")

const productController = require("./controllers/product.controller")

app.post("/register",register)
app.post("/login",login)

app.use("/product",productController)

app.listen(port,async ()=>{
    try{

        await connect()
    } catch(err) {
        console.log(err)
    }
    console.log(`server is running on port ${port}`)
})




