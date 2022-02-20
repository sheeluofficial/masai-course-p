
const mongoose = require("mongoose")

const gallerySchema =new mongoose.Schema({
    user_id:{type:mongoose.Schema.Types.ObjectId,required:true},
    
})