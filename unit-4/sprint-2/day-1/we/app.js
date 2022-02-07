const express = require("express")
let port = 2345;
const app = express()

app.use(express.json())
// app.use(middleware1)
app.post("/",middleware1,(req,res)=>{
   
    res.send(req.body)
})

function middleware1(req,res,next) {
console.log("middleware 1")
req.body.hi = "sheelu"
next()

}




app.listen(port,()=>{
    console.log(`server is listening on Port ${port}`)
})