const mongoose = require("mongoose")

const connect = ()=>{
    return mongoose.connect("mongodb+srv://sheeluofficial:Sheeluofficial1@cluster0.6ru0e.mongodb.net/eval")
}

module.exports = connect;