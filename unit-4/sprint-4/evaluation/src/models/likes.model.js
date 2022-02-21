
const mongoose = require("mongoose")


const likeSchema = new mongoose.Schema({

    userID:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
    postID:{type:mongoose.Schema.Types.ObjectId,ref:"post",required:true}


},{
    timestamps:true
})

module.exports = mongoose.model("postlike",likeSchema)