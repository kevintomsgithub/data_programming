var express = require("express");
var server  = express();
server.use('/', express.static('dist'))
server.use('/', express.static('dist/views'))
//server.get('/graphdata',function(req,res){
//   getData.getgraphdata(function (data){
//      res.send(data);
//   });
//});

server.listen(1234);
console.log("Running at Port 1234");
