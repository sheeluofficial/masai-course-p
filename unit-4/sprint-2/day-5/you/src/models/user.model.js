const mongoose  = require("mongoose")

const userSchema  = new mongoose.Schema({
    name:{type:String,required:true},
    gender:{type:String,required:true},
    dob:{type:String,required:true},
    age:{type:Number,required:true},
    type:{type:String,required:true}
    
})