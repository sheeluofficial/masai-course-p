const express = require("express")
const books = require("./books.json")
let port = 2345
const app = express()

app.get("",(req,res)=>{
    return  res.send("hello")
})

app.get("/books",(req,res)=>{
    return res.send(books)
})

app.listen(port,()=>{
    console.log(`Express is listening on ${port}`)
})
