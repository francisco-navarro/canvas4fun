var express = require('express');
var browserSync = require('browser-sync');
var path = require('path');


// var app = express();
// var appPort = 3000;

// app.use('/', express.static(__dirname + '/src/'));
// app.use('/lib', express.static(__dirname + '/node_modules/'));

// app.listen(appPort);
// console.log('app started in ' + appPort);


browserSync.init(null, {
    browser: 'google chrome',
    port: 7000,
    files: ['src/**/*.*'],
    server: {
        baseDir: 'src',
        routes: {
          '/lib': 'node_modules'
        }
    }
});