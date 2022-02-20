const mongoose  = require("mongoose")


const proSchema = new mongoose.Schema({
    title:{type:String,required:true},
    price:{type:Number,required:true},
    user_id:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true}
},{
    timestamps:false,
    versionKey:false
}
)


module.exports = mongoose.model("product",proSchema)