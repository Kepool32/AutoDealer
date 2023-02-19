require('dotenv').config()

const express=require('express')
const sequelize=require('./db')
const errorHandler=require('./middleware/ErrorHandlingMiddleware')
const path=require('path')

const PORT =process.env.PORT || 5000
const models=require('./models/models')
const cors=require('cors')
const fileUpload=require('express-fileupload')


const app =express()
const router=require('./routes/indexRoutes')


app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname,'static')))
app.use(fileUpload({}))
/*app.get('/',(req,res)=>{
    res.status(200).json({message:'work'})

})*/

app.use('/api',router)


app.use(errorHandler)


const start= async ()=> {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))
    }catch(e){

    console.log(e)
    }
}

start()