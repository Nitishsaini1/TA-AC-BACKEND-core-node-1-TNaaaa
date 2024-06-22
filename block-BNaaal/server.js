var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req,res){
    res.end('welcome')
}

server.listen(4000,()=>{
    console.log('welcome')
});


// http.createServer((res,req)=>{
//     console.log(res,req);
//     res.end('welcome');
// }).listen(4000,"localhost")