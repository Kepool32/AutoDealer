const Router=require('express')
const router=new Router()
const carsController=require("../contollers/carsController")


router.post('/',carsController.create)
router.get('/',carsController.getall)
router.get('/:id',carsController.getOne)
router.delete('/:id',carsController.delete)

module.exports=router