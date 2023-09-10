const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/mongo?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.5/LoginSignupTutorial")
.then(()=>{
    console.log("mongoDB connected");
})
.catch(()=>{
    console.log("failed to connect");
})

const LogInSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = new mongoose.model("Collection1", LogInSchema)

module.exports = collection