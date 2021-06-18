var fs=require('fs')
fs.readFile('hello3.txt',(err,data)=>{
    if(!err){
        fs.writeFile('hello4.txt','w',function(){
            console.log('success!')
        })
            
       
    }
})