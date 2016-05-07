// Unit test for class FileInfo
'use strict';
const should = require('chai').should()
const os = require('os')
const fs = require('fs')
const path = require('path')

// var fi = new require('../lib/fileinfo')('test.ext');
var FileInfo = require('..').FileInfo
var fi = new FileInfo('test.txt');

console.log(fi.fileName());
console.log(fi.exists());
