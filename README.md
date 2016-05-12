# node-fsx
File System eXtension for NodeJS

## Installation

...bash
npm install node-fsx
...

## Usage
### FileInfo

...javascript
const fsx = require('node-fsx');

let fi = new fsx.FileInfo('file name is here');
console.log(fi.exists());
console.log(fi.creationTime());
console.log(fi.size());
console.log(fi.absPath());
console.log(fi.isFile());
console.log(fi.isDirectory());
console.log(fi.isDirectory());
...
