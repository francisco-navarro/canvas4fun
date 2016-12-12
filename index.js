var express = require('express');


var app = express();
var appPort = 3000;

app.use('/', express.static('./src/'));
app.use('/lib', express.static('./lib/'));
app.listen(appPort);
console.log('app started in ' + appPort);