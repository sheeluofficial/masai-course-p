let express = require("express")
const app = express()
const mongoose = require("mongoose")
const port = 2345;

const connect = () =>{
    return mongoose.connect("mongodb+srv://sheeluofficial:Sheeluofficial1@cluster0.6ru0e.mongodb.net/firstDB")
}

const userSchema = new mongoose.Schema({
    id:{type:Number,required:true},
    first_name:{type:String,required:true},
    last_name:{type:String,required:true},
    email:{type:String,required:true},
    gender:{type:String,required:false,default:"Male"},
    age:{type:Number,required:true}
})
   let User;
try {
     User = mongoose.model("user",userSchema)
} catch (e) {
    console.log(e.message)
}

app.get("",async (req,res)=>{

    
    let users =await User.findById({"61fbca25af696c6f7a92875f"}).lean().exec()


    res.send(users)
})


app.listen(port,async ()=>{
    try {
     
        await connect();
        console.log(`Server is running on port -- ${port}`)

    } catch(e) {

        console.log(e.message)

    }

})