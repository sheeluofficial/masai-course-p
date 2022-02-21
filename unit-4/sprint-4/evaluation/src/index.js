const express = require("express")
const app = express()
const port = 2345
const connect = require("./configs/db")
const { body, validationResult } = require('express-validator');
const upload = require("./configs/multer")
const {register,login} = require("./middlewares/authentication");
const multer = require("multer");
  const User = require("./models/user.model");
const req = require("express/lib/request");
const Post = require("./models/post.model")
const Comment = require("./models/comment.model")
app.use(express.json())
const formData = require('express-form-data');
const { send } = require("express/lib/response");

app.use(formData.parse());

// const formidable = require('express-formidable');

// app.use(formidable());


app.post("/post",async(req,res)=>{


  try{

 let post = await Post.create(req.body)

 res.status(200).send(send)
     


  } catch(err) {
    res.send(err)
  }


})

app.post("/comment",async(req,res)=>{


  try{

 let comment = await Comment.create(req.body)

 res.status(200).send(send)
     


  } catch(err) {
    res.send(err)
  }


})

app.delete("/post/:id",async(req,res)=>{


  try{

 let post = await Post.findByIdAndDelete(req.params.id)

 res.status(200).send("deleted")
     


  } catch(err) {
    res.send(err)
  }


})

app.patch("/post/:id",async(req,res)=>{


  try{

 let post = await Post.findByIdAndUpdate(req.params.id,{new:true}).lean().exec()

 res.status(200).send(post)
     


  } catch(err) {
    res.send(err)
  }


})


app.get("/post",async (req,res)=>{


    try {
      const page = req.query.page || 1;
      const size = req.query.size || 10;
  
     

      const posts = await Post.find() // 30 documents
        .skip((page - 1) * size) // page 1 first 15 documents
        .limit(size)
        .lean()
        .exec();
  
      const totalPages = Math.ceil(
        (await Post.find().countDocuments()) / size
      );
  
      return res.send({ posts, totalPages });
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  




app.post("/register",
  body("firstName").notEmpty().isLength({min:3,max:30}),
  body("lastName").optional({checkFalsy: true}).isLength({min:3,max:30}),
  body("age").isNumeric({ min: 0, max: 50 }),

  body("email").isEmail().custom(async (value)=>{
   
    let user = await User.findOne({email:value}).lean().exec()

    if(user) {
        throw new Error("user already exist")
        return false
    }

    return true


  }),
upload.single("profile-pic"),register)

// app.post("/register",upload.single("profile-pic"),register)



  app.post("/login",login)

  

app.listen(port, async ()=>{
    await connect()

    console.log(`server is connected on port ${port}`)
    
})