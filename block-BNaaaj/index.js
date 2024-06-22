console.log('Welcome to Nodejs');

var os = require('os');

var freeM = os.freemem();
var cpus = os.cpus().length;

var fs = require('fs');

fs.readFile();