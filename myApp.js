var express = require('express');
const path = require('path');

let jsonMessage = {
  "message": "Hello json"
}

var app = express();

app.get("/",function(req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'));
    //res.sendFile(__dirname/views/index.html);
})

app.use('/public',express.static(path.join(__dirname, '/public')));

app.get('/json',function(req, res) {
  res.json(jsonMessage);
})


































 module.exports = app;
