const mongoose = require("mongoose")


const authorSchema  = new mongoose.Schema({
    speciality:{type:String,required:true},
   detail:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},

},
{
timestamps:true
}
)


module.exports = mongoose.model("author",authorSchema)