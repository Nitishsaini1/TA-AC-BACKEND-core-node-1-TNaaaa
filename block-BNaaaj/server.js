let urlstring = 'https://airindia.com/fares/calculate?from=delhi&to=detroit';

let url = require('url')

let parsedurl = url.parse(urlstring)

console.log(parsedurl);

console.log(parsedurl.pathname);

console.log(parsedurl.protocol);