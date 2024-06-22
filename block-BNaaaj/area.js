function square(n){
    return n*n;
}

function rectangle(l,b){
    return l*b
}
function circle(r){
    return r*r*Math.PI
}

module.exports = {
    rectangle:rectangle,
    square:square,
    circle:circle
}