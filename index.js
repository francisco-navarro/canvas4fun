var express = require('express');


var app = express();
var appPort = 3000;

app.use('/', express.static('./app/'));
app.listen(appPort);
console.log('app started in ' + appPort);