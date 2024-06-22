var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req,res){
    console.log(req.method , req.url);
    if(req.method === 'GET' && req.url === '/'){
        res.setHeader('Content-Type', 'text/plain')
        res.end('Welcome to homepage')
    }else if(req.method === 'GET' && req.url === '/about'){
        res.setHeader('Content-Type', 'text/html')
        res.end('<h2>this is all about NodeJS</h2>')
    } else if (req.method === 'POST' && req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/json' });
        res.end('message: this is a post request');
     } 
}

server.listen(4000,()=>{
    console.log('listening to 5k');
})