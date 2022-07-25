var http = require('http');
var port = process.env.PORT|| 8726;
var server=http.createServer((req,res)=>
{
    res.write(
        "<h1>Hii from Node HTTP</h1>"
    );
    res.end()
})
server.listen(port);