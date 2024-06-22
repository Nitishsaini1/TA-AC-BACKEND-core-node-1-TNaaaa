var http = require('http');

let server = http.createServer(handleRequest);

function handleRequest(req,res){
    res.statusCode = 201;
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1> hello world </h1>')
}

server.listen(4444,()=>{
    console.log('port 4444')
})