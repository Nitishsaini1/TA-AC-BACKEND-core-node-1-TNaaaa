var http =  require('http');

var server = http.createServer(handleRequest);

function handleRequest(req,res){
    console.log(req.headers);
    console.log(req.method,req.url);

    res.end('welcome')
}

server.listen(3000,()=>{
    console.log('server listening to 3000')
})