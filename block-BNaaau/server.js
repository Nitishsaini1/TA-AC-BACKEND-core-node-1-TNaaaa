const http = require('http');

const url = require('url');

const fs = require('fs');

const server = http.createServer(handleRequest);
function handleRequest(req, res) {
    console.log(req);
    console.log(res);
    res.end('The Server is Up and Running');
};

server.listen(5000, () => {
    console.log('Server listening on port 5k');
});


const server2 = http.createServer(handleRequest2);
function handleRequest2(req, res) {
    res.end('My first server in NodeJS');
};

server2.listen(5100, () => {
    console.log('Server listening on port 5.1k');
});


const server3 = http.createServer(handleRequest3);
function handleRequest3(req, res) {
    console.log(req.headers);
    res.end(req.headers['user-agent']);
};

server3.listen(5555, () => {
    console.log('Server listening on port 5555');
});

const server4 = http.createServer(handleRequest4);
function handleRequest4(req, res) {
    console.log(req.url,  req.method);
    res.setHeader('Content-Type', 'text/plain');
    res.end(req.method + " " + req.url);
};

server4.listen(5566, () => {
    console.log('Server listening on port 5566');
});

const server5 = http.createServer(handleRequest5);
function handleRequest5(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end(JSON.stringify(req.headers));
};

server5.listen(7000, () => {
    console.log('Server listening on port 7k');
});

const server6 = http.createServer(handleRequest6);
function handleRequest6(req, res) {
    res.statusCode = 202;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`OK`);
};

server6.listen(3333, () => {
    console.log('Server listening on port 3333');
});

const server7 = http.createServer(handleRequest7);
function handleRequest7(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.end(`<h3>Welcome to altcampus</h3>`);
};

server7.listen(8000, () => {
    console.log('Server listening on port 8000');
});

 const server8 = http.createServer(handleRequest8);
function handleRequest8(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`<h3>Welcome to altcampus</h3>`);
};

server8.listen(8001, () => {
    console.log('Server listening on port 8001');
});

const server9 = http.createServer(handleRequest9);
function handleRequest9(req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(`{success: true, message: 'Welcome to Nodejs'}`);
};

server9.listen(8888, () => {
    console.log('Server listening on port 8888');
});

const server10 = http.createServer(handleRequest10);
function handleRequest10(req, res) {
    console.log(req.method);
    if (req.method === 'POST' && req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(`<h2>Posted for first time</h2>`);
    }
};

server10.listen(5050, () => {
    console.log('Server listening on port 5050');
});


const server11 = http.createServer(handleRequest11);
function handleRequest11(req, res) {
    console.log(req.method);
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(`Shishupal Kumar`);
    }
    else if (req.method === 'GET' && req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(`<h1>Shishupal Kumar</h1>`);
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/html'}); 
        res.end(`<h2>Error 404: Page Not Found</h2>`);
    }
};
server11.listen(2345, () => {
    console.log('Server listening on port 2345');
});

const server13 = http.createServer(handleRequest13);
function handleRequest13(req, res) {
  let parsedUrl = url.parse(req.url, true);
  console.log(parsedUrl.pathname, req.url);
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(parsedUrl.query))
};


server13.listen(2000, () => {
    console.log('Server listening on port 2k');
});
