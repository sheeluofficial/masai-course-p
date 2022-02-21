
const mongoose = require("mongoose")


const postSchema = new mongoose.Schema({
    body:{type:String,required:false},
    likes:{type:Number,required:false,default:0},
    userID:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true}

},{
    timestamps:true
})

module.exports = mongoose.model("post",postSchema)