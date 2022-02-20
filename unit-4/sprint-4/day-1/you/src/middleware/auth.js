const jwt = require("jsonwebtoken")
require("dotenv").config()

const verifyToken = (token) =>{
          
    return new Promise((resolve,reject)=>{
        jwt.verify(token,process.env.SECRET_KEY,(err,user)=>{
            if(err) reject(err)

            resolve(user)
        })
    })
}


const auth =async  (req,res,next)=>{

    if(!req.headers.authorization) {
        return res.status(400).send("login to proceed")
    }

    if(!req.headers.authorization.startsWith("Bearer ")) {
        return res.status(400).send("login to proceed")
    }

    let token = req.headers.authorization.split(" ")[1]

    let user;

    try{
           user =await verifyToken(token)
    } catch(err) {
      return  res.status(500).send("token is wrong or not provided")
    }
    req.user = user.user
    next()
// console.log(user)
// res.send()
}


module.exports = auth