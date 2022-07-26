var http=require('http');
var fs=require('fs');
var cors=require('cors');
//var app=require('cors');
var cors=require('cors');
app.use(cors());

var server=http.createServer((req,res)=>{
    fs.readFile('shirts.json','utf-8',function(err,data){
        if(err) throw err;
        res.write(data);
        re.end();
    })
})
server.listen(8765)