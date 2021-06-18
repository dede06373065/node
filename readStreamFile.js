var fs=require('fs')
var rs=fs.createReadStream('hello4.txt')
var ws=fs.createWriteStream('hello5.txt')

rs.once("open",function(){
    console.log('Stream is open')
})

rs.once("close",function(){
    console.log('stream is close')
    ws.end()//data reading finish close the writing
})
ws.once("open",function(){
    console.log('StreamW is open')
})

ws.once("close",function(){
    console.log('streamW is close')
})

rs.on("data",function(data){
    ws.write(data)
    
})