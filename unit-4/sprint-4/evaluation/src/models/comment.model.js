
const mongoose = require("mongoose")


const commentSchema = new mongoose.Schema({
    body:{type:String,required:true},
    userID:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
    postID:{type:mongoose.Schema.Types.ObjectId,ref:"post",required:true}

},{
    timestamps:true
})

module.exports = mongoose.model("comment",commentSchema)