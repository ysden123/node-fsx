/**
 * @class FileInfo
 * 
 * @author Yuriy Stul
 * @created 05/07/2016
 */
'use strict';
const path = require('path'),
    os = require('os'),
    fs = require('fs');

class FileInfo {
    /**
     * Initializes a new instance of the class FileInfo
     * 
     * @param {string} file path to file
     */
    constructor(file) {
        if ((typeof file) !== 'string')
            throw new Error('file must be string');

        this.file = file;
    }

    /**
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

    /**
     * @return {Date} creation time
     */
    creationTime() {
        try {
            return fs.statSync(this.file).birthtime;
        }
        catch (err) {
            return undefined;
        }
    }

    /**
     * @return {number} file size, if it is a file; otherwise - 'undefined'
     */
    size() {
        try {
            return fs.statSync(this.file).size;
        }
        catch (err) {
            return undefined;
        }
    }

    /**
     * @return {string} absolute path to file.
     */
    absPath() {
        try {
            return path.resolve(this.file);
        }
        catch (err) {
            return undefined;
        }
    }

    /**
     * @return {boolean} true, if it is a file 
     */
    isFile() {
        try {
            return fs.statSync(this.file).isFile();
        }
        catch (err) {
            return undefined;
        }
    }

    /**
     * @return {boolean} true, if it is a directory 
     */
    isDirectory() {
        try {
            return fs.statSync(this.file).isDirectory();
        }
        catch (err) {
            return undefined;
        }
    }
};

module.exports = FileInfo;