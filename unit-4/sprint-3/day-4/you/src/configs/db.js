const mongoose = require("mongoose")

module.exports =()=>{
    return mongoose.connect("mongodb+srv://sheeluofficial:Sheeluofficial1@cluster0.6ru0e.mongodb.net/authh?retryWrites=true&w=majority")
}
