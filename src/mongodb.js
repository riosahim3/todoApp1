const mongoose = require("mongoose")

// mongoose.connect("mongodb+srv://sahim:ncww54ZzNBaXgHYS@cluster0.abxnpg7.mongodb.net/data1?retryWrites=true&w=majority")
mongoose.connect("mongodb://127.0.0.1:27017/TSignUp?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.5")
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