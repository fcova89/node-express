var express = require('express');
var app = express();
app.get("/",function(req, res) {
  res.send(__dirname);
  //res.sendFile(__dirname/views/index.html);
})




































 module.exports = app;
