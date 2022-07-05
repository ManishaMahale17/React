var express = require("express");
var router = express.Router();

router.get('/testapi',function(request,response,next){
    console.log("called server")
    response.send({"hello":["kajal"," test"]})
});

module.exports = router;