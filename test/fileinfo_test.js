// Unit test for class FileInfo
'use strict';
const should = require('chai').should(),
    os = require('os'),
    fs = require('fs'),
    path = require('path'),
    FileInfo = require('..').FileInfo;


describe('FileInfo', function () {
    let testFile = path.join(os.tmpdir(), 'checker_test.txt');
    let text = 'abc';

    before(function () {
        fs.writeFileSync(testFile, text);
    })

    after(function () {
        try {
            fs.unlink(testFile)
        } catch (e) { }
    })

    describe('#exists', function () {
        it('Should check directory', function () {
            let fi = new FileInfo(testFile);
            fi.exists().should.be.equals(true);
            fi = new FileInfo('XYZbred3322');
            fi.exists().should.be.equals(false);
        });
        it('Should check file', function () {
            let fi = new FileInfo(testFile);
            fi.exists().should.be.equals(true);
        });
    });

    describe('#creationTime', function () {
        it('Should return creation time', function () {
            let fi = new FileInfo(testFile);
            fi.creationTime().should.be.a('Date');

            fi = new FileInfo(os.tmpdir());
            fi.creationTime().should.be.a('Date');

            fi = new FileInfo('bred');
            should.not.exist(fi.creationTime());
        });
    });

    describe('#size', function () {
        it('Should return file size', function () {
            let fi = new FileInfo(testFile);
            fi.size().should.be.equals(text.length);
        });
    });
    
    describe('#absPath', function () {
        it('Should return absolute path', function () {
            let fi = new FileInfo(testFile);
            fi.absPath().should.be.a('string');
        });
    });
    
    describe('#isFile', function () {
        it('Should return true for file', function () {
            let fi = new FileInfo(testFile);
            fi.isFile().should.be.equals(true);
        });
        it('Should return false for directory', function () {
            let fi = new FileInfo(os.tmpdir());
            fi.isFile().should.be.equals(false);
        });
    });
    
    describe('#isDirectory', function () {
        it('Should return false for file', function () {
            let fi = new FileInfo(testFile);
            fi.isDirectory().should.be.equals(false);
        });
        it('Should return true for directory', function () {
            let fi = new FileInfo(os.tmpdir());
            fi.isDirectory().should.be.equals(true);
        });
    });
})
