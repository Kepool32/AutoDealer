const Router=require('express')
const router=new Router()
const modelsController=require("../contollers/modelsController")


router.post('/',modelsController.create)
router.get('/',modelsController.getall)


module.exports=router