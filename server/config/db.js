const mongoose = require('mongoose');
require('dotenv').config();
const connectDb = async() =>{
    try{
        mongoose.connect(process.env.DB_CONNECTION_STRING);
        console.log("MongoDB Connected Successfully!")
    } catch(err){
        console.log("MongoDb connection failed: ",err.message)
    }
}

module.exports = connectDb;