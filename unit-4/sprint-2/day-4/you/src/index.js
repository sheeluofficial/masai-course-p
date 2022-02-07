const express = require("express")
const port     = 2345;
const app = express()
const connect = require("./configs/db")

const userController = require("./controller/user.controller")
const authorController = require("./controller/author.controller")
const bookController = require("./controller/book.controller")
const sectionController = require("./controller/section.controller")

 app.use(express.json())
 
app.use("/user",userController)
app.use("/author",authorController)
app.use("/book",bookController)
app.use("/section",sectionController)








app.listen(port, async ()=>{
    
    try {
    await connect()
    console.log(`server is running on port ${port}`)
    }  catch(e) {
        console.log(e.message)
    }
})