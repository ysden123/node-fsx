// Unit tests for temp module
'use strict';
const should = require('chai').should(),
    os = require('os'),
    fs = require('fs'),
    path = require('path'),
    fsx = require('..');

describe('temp', function() {
    describe('#getTempDir', function() {
        it('Should return temp directory', function() {
            let tmpDir = fsx.getTempDir();
            should.exist(tmpDir);
            tmpDir.should.equal(os.tmpDir());
        })
    })

    describe('#getTempFileName',function(){
        it('Should return full path to file in the temp dir',function(){
            let tmpFile = fsx.getTempFileName('test.txt');
            should.exist(tmpFile);
            tmpFile.startsWith(os.tmpDir()).should.be.true;
            tmpFile.endsWith('test.txt').should.be.true;
        })
    })

    describe('#createTempFileName',function(){
        it('Should return full path to file in the temp dir',function(){
            let tmpFile1 = fsx.createTempFileName('prefix', '.txt');
            should.exist(tmpFile1);
            tmpFile1.startsWith(os.tmpDir()).should.be.true;
            tmpFile1.includes('prefix-').should.be.true;
            tmpFile1.endsWith('.txt').should.be.true;
            let tmpFile2 = fsx.createTempFileName('prefix', '.txt');
            tmpFile1.should.not.equal(tmpFile2);
        })
    })
})
