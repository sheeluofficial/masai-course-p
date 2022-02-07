const post = (model) =>
{ 
 return async (req,res)=>{
    try{
           const item = await model.create(req.body)
         return   res.status(201).send(item) 
    }    catch(err) {
        return res.status(500).send(err.message)
    }
    }
}
    module.exports = (model)=>{
        return {
            post:post(model)
        }
    }
