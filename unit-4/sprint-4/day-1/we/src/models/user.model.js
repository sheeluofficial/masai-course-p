
 const mongoose = require("mongoose")
 const bcrypt = require("bcryptjs")

 const userSchema = new mongoose.Schema({
     role:[{type:String,required:true}],
     email:{type:String,required:true,unique:true},
     password:{type:String,required:true}

 },{
     timestamps:true
 })

 userSchema.pre("save",function(next) {
     if(!this.isModified("password")) {
         return next()
     }


     let hash = bcrypt.hashSync(this.password,8) 

     this.password = hash

     return next()
 })

 
 userSchema.methods.matchPass = function(password) {
    return bcrypt.compareSync(password,this.password)
}

 module.exports = mongoose.model("user",userSchema)