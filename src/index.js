const { log } = require("console");
const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs")
const collection = require("./mongodb")
const mongoose = require("mongoose")
const port = process.env.PORT || 3000

// const dburl = "mongodb+srv://sahim:ncww54ZzNBaXgHYS@cluster0.abxnpg7.mongodb.net/data1?retryWrites=true&w=majority";

// const dburl = "mongodb://127.0.0.1:27017/mongo?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.5"

const connecionParams = {
    // useNewParser:true,
    useunifiedTopology:true
};

// mongoose.connect(dburl, connecionParams)
// .then(()=>{
//     console.info("Connected to the db")
// }).catch((e)=>{
//     console.log("Error db : ",e);
// })


const templatePath = path.join(__dirname,'../templates')

app.use(express.json())
app.set("view engine", "hbs")
app.set("views", templatePath)
app.use(express.urlencoded({extended:false}))

 

app.get("/",(req,res)=>{
    res.render("signup") 
})

app.get("/list",(req,res)=>{
    res.render("list")
})

app.get("/login",(req,res)=>{
    res.render("login")
})
 
app.get("/signup",(req,res)=>{
    res.render("signup")
})

app.post("/signup",async (req,res)=>{

    try{
        const data = {
            name:req.body.name,
            password:req.body.password
        }
    
        await collection.insertMany([data])
    
        res.render("login")

        window.alert("Registration complete. Log in to continue")
    
    }
    catch{(e)=>{
        console.log("the error is:::::",e);
    }}

})


app.post("/login",async (req,res)=>{

    try{
        const check = await collection.findOne({name:req.body.name})

        if(check.password==req.body.password){
            res.render("list")
        }
        else {
            res.send("wrong password")
        }
    }   
    catch{
        res.send("wrong credentials")
    }


})




app.listen(port, ()=>{
    console.log(`Connected to ${port}`);
})   