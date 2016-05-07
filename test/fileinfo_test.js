'use strict';
// var fi = new require('../lib/fileinfo')('test.ext');
var FileInfo = require('../lib/fileinfo')
var fi = new FileInfo('test.txt');

console.log(fi.fileName());
// console.log(fi.exists());
