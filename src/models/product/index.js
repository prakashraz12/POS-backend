const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    stock:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    discount:{
        type:Number
    },
    productImage:{
        type:String
    }
})

const Product = new mongoose.model("Product", productSchema)
module.exports = Product