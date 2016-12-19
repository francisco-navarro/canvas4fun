var express = require('express');
var path = require('path');

if(process.argv[2] === 'debug') {
    require('browser-sync').init(null, {
        browser: 'google chrome',
        port: 7000,
        files: ['src/**/*.*'],
        server: {
            baseDir: 'src',
            routes: {
            '/lib': 'node_modules',
            '/img': 'img'
            }
        }
    });
} else {
    var app = express();
    var appPort = 3000;

    app.use('/', express.static(__dirname + '/src/'));
    app.use('/lib', express.static(__dirname + '/node_modules/'));
    app.use('/img', express.static(__dirname + '/img/'));

    app.listen(appPort);
    console.log('app started in ' + appPort);
}

