const sequelize=require('../db')

const {DataTypes}=require('sequelize')

const User=sequelize.define( 'user',{

    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    email:{type:DataTypes.STRING,unique:true},
    password:{type:DataTypes.STRING},
    role:{type:DataTypes.STRING,defaultValue:'USER'}

    }

)

const Basket =sequelize.define( 'basket',{

        id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},


    }

)
const BasketCar =sequelize.define( 'basket_car',{

        id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},


    }


)

const Car =sequelize.define( 'cars',{

        id:{type:DataTypes.INTEGER,primaryKey:true,onDelete: 'cascade', hooks: true,autoIncrement:true},
        name:{type:DataTypes.STRING,unique:true,allowNull:false },
        price:{type:DataTypes.INTEGER,allowNull:false },
        rating:{type:DataTypes.INTEGER,defaultValue: 0 },
        img:{type:DataTypes.STRING,allowNull:false},

}
)
const Mark =sequelize.define( 'marks',{

        id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
        name:{type:DataTypes.STRING,unique:true,allowNull:false },

    }


)
const Model =sequelize.define( 'models',{

        id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
        name:{type:DataTypes.STRING,unique:true,allowNull:false },


    }


)

const Rating =sequelize.define( 'rating',{

        id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
        rate:{type:DataTypes.INTEGER,allowNull:false}

    }


)

const car_infos =sequelize.define( 'car_infos',{

        id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
        title:{type:DataTypes.STRING,allowNull:false},
        description:{type:DataTypes.STRING,allowNull:false},
    }


)

const MarkModel=sequelize.define('mark_model',{

    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},

})

/*
Car.hasMany(Car_info)
Car_info.belongsTo(Car)*/


User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketCar)
BasketCar.belongsTo(Basket)


Mark.hasMany(Car)
Car.belongsTo(Mark)

Model.hasMany(Car)
Car.belongsTo(Model)

Car.hasMany(Rating)
Rating.belongsTo(Car)

Car.hasMany(BasketCar)
BasketCar.belongsTo(Car)

Car.hasMany(car_infos,{as:'info'});
car_infos.belongsTo(Car)

Mark.belongsToMany(Model,{through:MarkModel})
Model.belongsToMany(Mark,{through:MarkModel})


module.exports={
    User,
    Basket,
    BasketCar,
    Car,
    Mark,
    Model,
    Rating,
    car_infos,
    MarkModel

}
