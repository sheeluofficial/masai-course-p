const jwt = require("jsonwebtoken")
require("dotenv").config()

const verifyToken = (token)=>{
    return new Promise((resolve,reject)=>{
        jwt.verify(token,process.env.JWT_SECRET_KEY,(err,user)=>{
            if(err) return reject(err)

            resolve(user)
        })
    })
}


module.exports = async (req,res,next) =>{
    {
    // check if authoriztion header has benn set
    // if not throw an error
    // if bearer token is in authorization token
    // if not throw an error
    // split the bearer token get token 
    // if token is invalid we will throw an error
    // if token is valid we will put the user retrieved from the token in the req object
    // return next
    }

      if(!req.headers.authorization) 
      return res.status(400)
      .send({
          message:"authorization id not in header"
        })

        if(!req.headers.authorization.startsWith("Bearer ")) 
        return res.status(400)
        .send({
            message:"authorization token is not in header"
          }) 
     

          const token = req.headers.authorization.split(" ")[1]

let user;
         try{
             user = await verifyToken(token)
         } catch(err) {
           return   res.status(400).send({
                message:"authorization token is invalid or not provided"
              }) 
         }

          

         req.user = user.user;

         return next()
}         