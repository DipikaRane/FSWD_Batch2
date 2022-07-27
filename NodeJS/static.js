var http=require('http');
var fs=require('fs');
var port=process.env.PORT || 8500;

var server=http.createServer((req,res)=>{
    fs.readFile('shirts.json','utf-8',function(err,data){
        if(err) throw err;
        res.write(data);
        res.end();
    })
})
server.listen(port)