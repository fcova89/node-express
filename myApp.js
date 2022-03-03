var express = require('express');
const path = require('path');
//require('dotenv').config()
var jsonObj = {message: "Hello json"};

var app = express();

//app.listen(3000, function(req, res) {console.log(process.env.MESSAGE_STYLE);}); //per utilizzo locale

app.get("/",function(req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'));
})

app.use('/public',express.static(path.join(__dirname, '/public'))); //middleware per utilizzare style.css

app.get('/json', (req, res) => {
  //res.setHeader('Content-Type', 'application/json'); // da verificare per impostare contenuto
  if(process.env.MESSAGE_STYLE == 'uppercase'){
    jsonObj.message = jsonObj.message.toUpperCase();
    res.json(jsonObj);
  }
  res.json(jsonObj);
});
































 module.exports = app;
