var express = require('express');
const path = require('path');

var app = express();

app.get("/",function(req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'));
    //res.sendFile(__dirname/views/index.html);
})

app.use('/public',express.static(path.join(__dirname, '/public')));

app.get('/json',function(req, res) {
  res.json({message: "Hello json"});
})


































 module.exports = app;
