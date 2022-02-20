const mongoose  = require("mongoose")
const bcryptjs = require("bcryptjs")

const userSchema = new mongoose.Schema({
    email:{type:String,required:true},
    password:{type:String,required:true}
},{
    timestamps:false,
    versionKey:false
}
)

userSchema.pre("save",function(next){
     
    if(!this.isModified("password")) return next()
let hash = bcryptjs.hashSync(this.password,8)
    this.password = hash
    
    return next()          
})

userSchema.methods.matchPass = function(given){
return  bcryptjs.compareSync(given,this.password)
}

module.exports = mongoose.model("user",userSchema)