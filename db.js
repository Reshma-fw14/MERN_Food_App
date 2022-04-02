const mongoose=require("mongoose")

var mongoURL="mongodb+srv://reshma:reshma1200@cluster0.ncg7w.mongodb.net/mern-pizza"

mongoose.connect(mongoURL, {useUnifiedTopology:true, useNewUrlParser:true })

var db=mongoose.connection;

db.on('connected', ()=>{
    console.log("Mongo db connection succesful")
})

db.on('error', ()=>{
    console.log("mongodb connection failed")
})

module.exports = mongoose