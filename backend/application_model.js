var mongoose=require("mongoose")

//connection of url 
conn_url="mongodb://root:root@cluster0-shard-00-00.dqte6.mongodb.net:27017,cluster0-shard-00-01.dqte6.mongodb.net:27017,cluster0-shard-00-02.dqte6.mongodb.net:27017/clothsapp?ssl=true&replicaSet=atlas-j2zamj-shard-0&authSource=admin&retryWrites=true&w=majority"

//connection to mongodb
mongoose.connect(conn_url,{useNewUrlParser:true})

//making schema

const userSchema=new mongoose.Schema({
    "email":String,
    "password":String,
    "mobile":String,
})

const orderSchema=new mongoose.Schema({
    "user":String,
    "mobile":Number,
    "pamount":Number,
    "address":{
        type:Object,
        "billing_name": String,
        "billing_address_line1": String,
        "billing_address_zip": String,
        "billing_address_state": String,
        "billing_address_city": String,
        "billing_address_country": String,
        "billing_address_country_code": String,
        "shipping_name": String,
        "shipping_address_line1": String,
        "shipping_address_zip": String,
        "shipping_address_state": String,
        "shipping_address_city": String,
        "shipping_address_country": String,
        "shipping_address_country_code": String
    
    },
    "basket":[
        {
            type: Object,
            "id":String,
            "image":String,
            "title":String,
            "rate":String,
            "description":String
        }
    ]
})

//connected with schema
const userModel=new mongoose.model("usernames",userSchema)

const orderModel=new mongoose.model("orders",orderSchema)

exports.User=userModel
exports.Order=orderModel