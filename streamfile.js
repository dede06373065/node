var fs=require('fs')
var ws=fs.createWriteStream('hello3.txt')
//分别写入很多内容
ws.write('this is my writing through streamWriting!')
ws.write('And it keeps writing!!!')
//监控stream打开还是关闭
ws.once("open",function(){
    console.log('stream is open')
})
ws.once("close",function(){
    console.log('stream is close')
})
ws.end()