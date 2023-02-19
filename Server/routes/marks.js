const Router=require('express')
const router=new Router()
const marksController=require("../contollers/marksController")
const checkRole=require('../middleware/checkRoleMiddleware')


router.post('/',marksController.create)
router.get('/',marksController.getall)


module.exports=router