

const mongoose = require("mongoose")

const masterSchema = new mongoose.Schema({
    balance:{type:Number,required:true},
    relationshipManager:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
    branch:{type:mongoose.Schema.Types.ObjectId,ref:"branch",required:true},
    user:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true}

},
{
    timestamps:true
})

module.exports = mongoose.model("masterAccount",masterSchema)