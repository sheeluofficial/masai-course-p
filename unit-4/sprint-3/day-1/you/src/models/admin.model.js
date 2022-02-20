const mongoose  = require("mongoose")


const adminSchema = new mongoose.Schema({
    first_name:{type:String,required:true},
    last_name:{type:String,required:true},
    gender:{type:String,required:true},
    age:{type:Number,required:true},
    email:{type:String,required:false,default:"xyz@mail.com"}


},{
    timestamps:true
}
)

module.exports = mongoose.model("admin",adminSchema)