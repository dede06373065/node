var fs=require('fs')
fs.writeFile('hello3.txt','this is really simple',{flag:'a'},function(err){
    if(!err){
        console.log('success!')
    }
})