console.log('execute me first');

console.time('task 1')

for(let i = 0; i < 100000; i++){

}
console.timeEnd('task 1');

console.log('execute me last');

function sum(a,b){
    return a + b
}

module.exports = {
    sum : sum
}