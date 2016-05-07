// Unit test for class FileInfo
'use strict';
const should = require('chai').should(),
    os = require('os'),
    fs = require('fs'),
    path = require('path'),
    FileInfo = require('..').FileInfo;


describe('FileInfo', function () {
    let testFile = path.join(os.tmpdir(), 'checker_test.txt');

    before(function () {
        fs.writeFileSync(testFile, 'abc');
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
})
