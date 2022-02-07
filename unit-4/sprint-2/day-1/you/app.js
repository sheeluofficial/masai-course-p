const express = require("express");
const res = require("express/lib/response");
const books = require("./books.json")
let port = 2345;
const app = express()

// app.use(express.json())
// app.use(middleware1)

app.get("/books",(req,res)=>{
    res.send(books)
})

app.get("/book/:name",singleBook,(req,res)=>{
    // console.log("i am hit ",req.params.name)
    res.send({bookName:req.bookData})

})



function singleBook(req,res,next) {
    let allBooks = books.books
   let book =  allBooks.find((Element)=>{
         return Element.title==req.params.name;
     })

     if(book==undefined) {
         req.bookData = "Not found"
     } else {
         req.bookData = book
     }

next()

}




app.listen(port,()=>{
    console.log(`server is listening on Port ${port}`)
})