const express = require("express")
const User = require("./models/user.model")
const app = express()


const { body, validationResult } = require("express-validator")
const port = 2345
const connect = require("./configs/db")

const passport = require("./configs/google.oauth")

const {register,login,newToken} = require("./controllers/auth.controller")
const postController = require("./controllers/post.controller")
app.use(express.json())
app.post("/register",
body("name").notEmpty().isLength({min:3}),
body("email").notEmpty().isEmail().custom(async(value)=>{
    let user = await User.findOne({email:value}).lean().exec()

    if(user) {
        throw new Error("user already exist")
    }    

    return true
}),
body("password").notEmpty().bail().isLength({min:8,max:20})
,
register)

app.post("/login",login)

app.use("/post",postController)


passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });


app.get('/auth/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

app.get( '/auth/google/callback',
    passport.authenticate( 'google', {
      
        failureRedirect: '/auth/google/failure'
}),(req,res)=>{
    
    let token = newToken(req.user)

    return res.send({user:req.user,token})

});


app.listen(port, async ()=>{
    await connect()

    console.log(`server is connected on port ${port}`)
    
})