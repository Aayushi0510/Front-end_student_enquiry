const express=require("express");
const bodyParser=require("body-parser")
// const { default: mongoose } = require("mongoose");
const mongoos=require("mongoose")
const Students=require("./schema");

const app=express();
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
const URL=`mongodb+srv://Aayushi_sharma:Ayu12345@cluster0.wqr9uuh.mongodb.net/data?retryWrites=true&w=majority`;
mongoos.connect(URL).then(()=>{
    console.log("data connect")
}).catch((err)=>{
    console.log("err",err)
})
 app.post("/user" ,(req, res)=>{
    const {
        name,email, password,phone,
    }= req.body
    Students.create({
        name,email, password,phone,
    }).then(()=>{
        res.send("data saved")
    }).catch(()=>{
        res.send("data is not saved")
    })
 })
app.get("/student",(req,res)=>(
    res.send("data is created")
))
 app.listen(7584,()=>{
    console.log("server running")
 })