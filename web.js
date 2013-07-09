var express = require('express')
   , fs = require('fs')
   , buffer = require('buffer');

var app = express.createServer(express.logger());

var indexHtml = fs.readFileSync('index.html');

app.get('/', function(request, response) {
  response.send(indexHtml.toString());
});

var port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log("Listening on " + port);
});
