var express = require('express');
var path = require('path');


var app = express();
var appPort = 3000;

app.use('/', express.static(__dirname + '/src/'));
app.use('/lib', express.static(__dirname + '/node_modules/'));

app.listen(appPort);
console.log('app started in ' + appPort);