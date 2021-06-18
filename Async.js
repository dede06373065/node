var fs=require('fs')
fs.open('hello2.txt','w',function(err,fd){
    if(!err){
        fs.write(fd,'This is the Async!',function(err){
            if(!err){
                console.log('success~')
            }
            fs.close(fd,function(err){
                if(!err)console.log('Close success')
            })
        })
    }else{
        console.log(err)
    }
})
