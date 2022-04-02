const express= require("express");
const App=express();
App.use(express.json());

App.get("/", (req,res)=>{
    res.send("server working")
})

const port = process.env.PORT || 5000;

App.listen(port, ()=> "server running on port ")