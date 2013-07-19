var express = require('express')
   , fs = require('fs')
   , buffer = require('buffer')
   , path = require('path');

var app = express.createServer(express.logger());

var indexHtml = fs.readFileSync('index.html');

app.use("/static", express.static(__dirname + '/static'));

app.get('/', function(request, response) {
  response.send(indexHtml.toString());
});

var port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log("Listening on " + port);
});
