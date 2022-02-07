const mongoose=  require("mongoose")

const savingSchema = new mongoose.Schema({
    account_number:{type:Number,required:true},
    balance:{type:Number,required:true},
    interestRate:{type:Number,required:true},
    masterAccount:{type:mongoose.Schema.Types.ObjectId,ref:"masterAccount",required:true}



},
{
    timestamps:true
})

module.exports = mongoose.model("savingAccount",savingSchema)