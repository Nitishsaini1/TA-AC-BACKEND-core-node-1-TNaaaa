Buffer
let Buff = Buffer.alloc(12);
Buff.write("welcome to node js")
console.log(Buff.toString())

// blocking

console.time('task-1');
for(var i = 0; i < 100000; i++){

}
console.timeEnd('task-1');

// non-blocking

console.time('task1')
setTimeout(()=>{
    console.log('time executed');
    console.timeEnd('task1')
},1000)

console.time('task2')