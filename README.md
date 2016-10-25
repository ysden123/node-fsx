# node-fsx
File System eXtension for NodeJS

![Travis status](https://secure.travis-ci.org/ysden123/node-fsx.png)

## Installation

```bash
npm install node-fsx
```

## API
### FileInfo
Class FileInfo provides information functions for a file:
 - exists()
 - creationTime()
 - size()
 - absPath()
 - isFile()
 - isDirectory()

### Temp functions
Module temp provides functions for temporary files:
 - getTempDir() - returns system temp directory
 - getTempFileName(fileName) - returns full path to file in the system temporary directory
 - createTempFileName(prefix,extension) - generates unique file name in the system temporary directory
 
## Usage
### FileInfo

```javascript
const fsx = require('node-fsx');

let fi = new fsx.FileInfo('file name is here');
console.log(fi.exists());
console.log(fi.creationTime());
console.log(fi.size());
console.log(fi.absPath());
console.log(fi.isFile());
console.log(fi.isDirectory());
```
### Temp
```javascript
const fsx = require('node-fsx');
console.log(fsx.getTempDir());
console.log(fsx.getTempFileName('temp.csv'));
console.log(fsx.createTempFileName('test', '.csv'));
```