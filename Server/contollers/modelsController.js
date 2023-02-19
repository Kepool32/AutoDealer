const {Model} = require("../models/models");

class modelsController{
    async create(req,res){
        const {name,year}=req.body
        const model=await Model.create({name,year})
        return res.json(model)


    }
    async getall(req,res){

        const models=await Model.findAll()
        return res.json(models)

    }


}

module.exports= new modelsController()