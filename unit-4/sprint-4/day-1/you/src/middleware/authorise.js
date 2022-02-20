const Post = require("../models/post.model")


module.exports =async (req,res,next)=>{
 
   let post = await Post.findById(req.params.Id).lean().exec()

   if(post.user==req.user._id) {
       return next()
   }

 return  res.status(403).send("you are not authorized to access this")


}