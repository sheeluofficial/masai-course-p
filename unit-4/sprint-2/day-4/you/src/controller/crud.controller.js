const { findById, findByIdAndUpdate, findByIdAndDelete } = require("../models/user.model");

const post = (model)=> async (req,res) =>{
    try {
            const item = await model.create(req.body);

            return res.status(201).send(item);
    }
    catch(err) {
        
        return res.status(500).send(err.message)

    }
}


const getOne = (model)=> async (req,res) =>{
    try {
        const item = await findById(req.params.Id).lean().exec();

        return res.status(201).send(item);
    }
    catch(err) {
        return res.status(500).send(err.message)
    }
}

const getAll = (model) => async (req,res) =>{
    try{
        let items = await model.find().lean().exec()
        return res.status(201).send(items)

    } catch(err) {
        return res.status(500).send(err.message)
    }
}

const updateOne = (model)=> async (req,res) =>{
    try {
         let item = await findByIdAndUpdate(req.params.Id,req.body,{new:true})
    } catch(err) {
        res.status(500).send(err.message)
    }
}

const deleteOne = (model) => async (req,res) =>{
    try {
        await findByIdAndDelete(req.params.Id)
        return res.status(201).send({"message":"Item Deleted"})
    } catch(err) {
        res.status(500).send(err.message)
    }
}

module.exports = (model) =>{
    return {
        post:post(model),
        getOne:getOne(model),
        getAll:getAll(model),
        updateOne:updateOne(model),
        deleteOne:deleteOne(model)
    }
}