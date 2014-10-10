var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var errorHandler = require('errorhandler');
var http = require('http');
var api = require('./src/api');

var app = express();
var server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(multer());
app.use(errorHandler());
app.use(express.static(__dirname + '/public'));

app.use('/api', api);

server.listen(3000);
console.log('Listening ', 3000);