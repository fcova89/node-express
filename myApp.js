var express = require('express');
const path = require('path');
//var http = require('http');

var app = express();

app.listen(3000, function(req, res) {
  console.log("Server is running at port 3000");
});

app.get("/",function(req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'));
    //res.sendFile(__dirname/views/index.html);
})

app.use('/public',express.static(path.join(__dirname, '/public')));

app.get('/json', (req, res) => {
  //res.setHeader('Content-Type', 'application/json');
  res.json({message: "Hello json"});
});
































 module.exports = app;
