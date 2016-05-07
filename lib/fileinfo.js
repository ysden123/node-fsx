/**
 * @class FileInfo
 * 
 * @author Yuriy Stul
 * @created 05/07/2016
 */
'use strict';
const path = require('path'),
    os = require('os');
class FileInfo {
    /**
     * Initializes a new instance of the class FileInfo
     * 
     * @param {string} file path to file
     */
    constructor(file) {
        this.file = file;
    }

    /**
     * Returns the file name
     * 
     * @return the file name
     */
    fileName() {
        return this.file;
    }


    /**
     * Checks whether a file or directory exists.
     * 
     * @return true, if file or directory exists, otherwise - false 
     */
    exists() {
        try {
            fs.accessSync(this.file, fs.F_OK);
            return true;
        }
        catch (err) {
            return false;
        }
    }
};

module.exports = FileInfo;