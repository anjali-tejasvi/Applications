var express=require("express");
var router= express.Router();
const data= require('./index')

router.post("/reg",(req, res)=>{
const data={
    name:req.body.name,
    Email:req.body.email,
    pass:req.body.pass

}

console.log(data);
res.send({
    data:data,
    message:"user sucessfully "
})
})

module.exports = router;