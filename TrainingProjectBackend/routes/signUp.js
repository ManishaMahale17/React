var express = require("express");
var router = express.Router();

router.post('',function(request,response,next){
    console.log("called post server")
    response.send({"hello":["manisha"," mahale"]})
});
module.exports = router;
