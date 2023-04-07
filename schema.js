const mongoose=require("mongoose");
const Students=new mongoose.Schema({
    name:'String',
    email:"String",
    password:"String",
    phone:"String",
})

module.exports=mongoose.model("data" ,Students);