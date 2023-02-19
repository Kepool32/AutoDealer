const uuid=require('uuid')
const path=require("path")
const {Car,car_infos}=require('../models/models')
const ApiError=require('../errors/ApiError')
const {DataTypes} = require("sequelize");


class carsController{
    async create(req,res,next){
        try {
            let {name,price, markId, modelId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const cars = await Car.create({name, price, markId, modelId, img: fileName})

            if(info){
                info=JSON.parse(info)
                info.forEach(i=>
                    car_infos.create({
                        title: i.title,
                        description: i.description,
                        carId: cars.id
                    })

                )
            }




            return res.json(cars)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }

    }
    async getall(req,res,){

        let{markId,modelId,limit,page}=req.query
        page=page || 1
        limit=limit || 9
        let offset=page*limit-limit
        let cars

        if(!markId && !modelId) {

            cars=await Car.findAndCountAll({limit,offset})
        }
        if(markId && !modelId){

            cars=await Car.findAndCountAll({where:{markId},limit,offset})
        }
        if(!markId && modelId){

            cars=await Car.findAndCountAll({where:{modelId},limit,offset})
        }
        if(markId && modelId){

            cars=await Car.findAndCountAll({where:{markId,modelId},limit,offset})
        }
        return res.json(cars)


    }

    async getOne(req,res){

        const {id}=req.params
        const cars=await Car.findOne(
            {
                where:{id},
                include:[{model:car_infos,as:'info'}]

            },

        )
        return res.json(cars)
    }
    async delete(req,res){
    /*    const {id}=req.params
        if(!{id}){

            throw new Error('Не указан id')

        }


        const cars = await Car.({id})
        return cars*/

        try{
            const cars_id=req.params.id

            const cars = await Car.destroy({where:{id:cars_id}})
            return res.json(cars)

        }catch (e){
            res.status(500).json(e)
        }

    }
}

module.exports=new carsController()