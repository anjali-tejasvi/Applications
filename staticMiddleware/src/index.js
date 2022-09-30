const express = require('express');
const app = express();
const path = require('path');


//console.log(__dirname);

const staticPath = path.join(__dirname, '../public');
//built in middleware
app.use(express.static(staticPath));


app.get("/", (req,res)=>{
    res.send("Hello Form Home page")
})

app.get("/about", (req,res)=>{
    res.send("Hello Form about page")
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})