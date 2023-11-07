const mongoose = require("mongoose")

const shopSchema = new mongoose.Schema({
    shopName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    products:[{
        type:mongoose.Types.ObjectId,
        ref:"Product"
    }]
})

const Shop = new mongoose.model("Shop", shopSchema);
module.exports = Shop