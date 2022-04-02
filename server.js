const express= require("express");
// const { default: Pizza } = require("./client/src/components/Pizza");
const App=express();
App.use(express.json());
const db=require("./db")

const Pizza=require("./models/pizzaModel")

App.get("/", (req,res)=>{
    res.send("server working")
})

App.get("/getpizzas", (req,res)=>{
    Pizza.find({}, (err,docs)=>{
        if(err){
          console.log(err)
        }else{
            res.send(docs)
        }
    })
})

const port = process.env.PORT || 5000;

App.listen(port, ()=> "server running on port ")