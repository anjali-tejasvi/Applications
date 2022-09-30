// const express = require('express')
// // const app = express()
// var router = express.Router();
// exports.SimpleMessage = 'Hello world';

// exports.SimpleMessage1 = (req,res)=>{
// console.log("hi aim function")
// }
// exports.data1=router.get("/get",(req, res)=>{

//     const data={
//         name:"ritesh"
//     }
//     console.log(data);
//     res.send(data)
// })

var express = require('express');
var router = express.Router();

router.get('/user',(req, res, ) =>{
    const data={
                name:"ritesh"
            }
            console.log(data);
            res.send(data)
});

module.exports = router;