const express = require("express");
const { connectDataBase } = require("./db");
const dotenv = require("dotenv")
const app = express()
dotenv.config({
    path: './env'
})


connectDataBase().then(() => {
    app.listen(process.env.PORT || 4000, () => {
        console.log(`⚙️   Server is running at port : ${process.env.PORT}`);
    })

}).catch((error) => {
    console.error("momgodb connection failed", error)
})