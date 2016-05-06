// Checker
'use strict';
const fs = require('fs')

/**
 * Checks whether a file or directory exists.
 * 
 * @param {String} path specifies file or directory.
 * @return true, if file or directory exists, otherwise - false 
 */
function pathExistsSync(path) {
    try {
        fs.accessSync(path, fs.F_OK);
        return true;
    }
    catch (err) {
        return false;
    }
}

module.exports = {
    pathExistsSync: pathExistsSync

}