const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    name:{type:String,required:true},
    body:{type:String,required:false},
    price:{type:String,required:true},
    writtenBy:[{type:mongoose.Schema.Types.ObjectId,ref:"author"}],
    section:{type:mongoose.Schema.Types.ObjectId,ref:"section",required:true}
},{
    timestamps:true
})

module.exports = mongoose.model("book",bookSchema)