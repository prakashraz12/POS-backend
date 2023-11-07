const { default: mongoose } = require("mongoose");
const { DB_NAME } = require("../constant");

const connectDataBase = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${"mongodb+srv://pos:pos@cluster0.acigyey.mongodb.net/"}`)
        console.log(`\n MONGOBD Connected !!DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("Mongo Db error", error);
        process.exit(1)
    }
}
module.exports ={connectDataBase}