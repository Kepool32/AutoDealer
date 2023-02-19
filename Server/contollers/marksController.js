const {Mark}=require('../models/models')
const ApiError=require('../errors/ApiError')

class marksController{
    async create(req,res){
        const {name}=req.body
        const mark=await Mark.create({name})
        return res.json(mark)

    }
    async getall(req,res){

        const marks=await Mark.findAll()
        return res.json(marks)

    }


}

module.exports=new marksController()