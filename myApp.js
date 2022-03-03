var express = require('express');
const path = require('path');

var app = express();

app.get("/",function(req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'));
    //res.sendFile(__dirname/views/index.html);
})
app.use('/public',express.static(path.join(__dirname, '/public')));
/*
app.get('/json', (req, res) => {
  //res.setHeader('Content-Type', 'application/json'); // da verificare per impostare contenuto
  if(process.env.MESSAGE_STYLE == 'uppercase'){
    jsonObj.message = jsonObj.message.toUpperCase();
    res.json(jsonObj);
  }
    res.json(jsonObj);
});
