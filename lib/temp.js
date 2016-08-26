/**
 * Functions for temp (folder, file, etc.)
 *  
 * @author Yuriy Stul
 * @created 23/07/2016
 */
'use strict'
const path = require('path'),
    os = require('os'),
    fs = require('fs');

/**
 * Returns full path to system temporary directory
 * 
 * @return the full path to system temporary directory
 */
function getTempDir() {
    return os.tmpdir();
}

/**
 * Returns full path to file located in the system temporary directory.
 * 
 * @param {String} fileName specifies the file name (without path).
 * @return the full path to file located in the temporary directory.
 */
function getTempFileName(fileName) {
    if (!fileName) throw new Error("fileName must be specified.");
    return path.join(getTempDir(), fileName);
}

/**
 * Generates unique file name and returns full path to a file in the system temporary directory.
 * 
 * @param {String} prefix specifies a begin of the file name.
 * @param {String} extension specifies the file name extension.
 * @return the full path to a file in the system temporary directory.
 */
function createTempFileName(prefix, extension) {
    if (!prefix) throw new Error("prefix must be specified.");
    if (!extension) throw new Error("extension must be specified.");

    // Generate file name.
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    let name = prefix + '-' + s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4() + extension;
    return path.join(getTempDir(), name);
}

module.exports = {
    getTempDir: getTempDir,
    getTempFileName: getTempFileName,
    createTempFileName: createTempFileName
}