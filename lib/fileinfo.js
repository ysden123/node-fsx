/**
 * @class FileInfo
 * 
 * @author Yuriy Stul
 * @created 05/07/2016
 */
const path = require('path'),
    os = require('os');

function FileInfo(file) {
    'use strict';

    this.file = file;

    this.fileName = function () {
        return file;
    }

    // this.exists = () => {
    //     try {
    //         fs.accessSync(file, fs.F_OK);
    //         return true;
    //     }
    //     catch (err) {
    //         return false;
    //     }

    // }
};

module.exports = FileInfo;