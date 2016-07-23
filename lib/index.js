'use strict';
const fileinfo = require('./fileinfo');
const temp = require('./temp');
module.exports = {
    FileInfo: fileinfo,
    getTempDir: temp.getTempDir,
    getTempFileName: temp.getTempFileName,
    createTempFileName: temp.createTempFileName
}