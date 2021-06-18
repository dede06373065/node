var fs=require('fs')
var fd=fs.openSync('hello.txt','w')
console.log(fd)
fs.writeSync(fd,'weather is good!')
fs.closeSync(fd)

