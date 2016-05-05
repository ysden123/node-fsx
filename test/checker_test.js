// Unit tests for functions in checker
'use strict';

const should = require('chai').should()
const os = require('os')
const fs = require('fs')
const path = require('path')
const checker = require('..').checker

describe('checker', function () {
    let testFile = path.join(os.tmpdir(), 'checker_test.txt');

    before(function () {
        fs.writeFileSync(testFile, 'abc');
    })

    after(function () {
        try {
            fs.unlink(testFile)
        } catch (e) { }
    })

    describe('#isPathExists', function () {
        it('Should check directory', function () {
            checker.isPathExists(os.tmpdir()).should.be.equals(true);
            checker.isPathExists('XYZbred3322').should.be.equals(false);
        })
        it('Should check file', function () {
            checker.isPathExists(testFile).should.be.equals(true);
        })
    })
})