const Router=require('express')

const router=new Router()



const cars=require('./cars')
const marks=require('./marks')
const model=require('./models')
const users=require('./users')





router.use('/user',users)
router.use('/marks',marks)
router.use('/models',model)
router.use('/cars',cars)

module.exports=router