var fs = require('fs');

fs.readFile('./content.md',(err,content)=>{
    console.log(err,content.toString())
})


var sync = require('./sync');

console.log(sync)