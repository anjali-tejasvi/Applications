const express = require('express')
const app = express()
const data= require("./controler/user")
const reg=require("./controler/register")
const port=3000

app.use(express.json());
app.use("/api",data);
app.use("/api",reg)


app.listen(port,()=>{
    console.log("server started")
    // console.log(data.SimpleMessage)
})