//ES5
function suma(x,y,z){
    if (y === undefined)
        y = 0;
    if (z === undefined)
        z = 0;
    return x + y + z;
}
//ES6
function suma(x,y=0,z=0){
    return x + y + z;
}
//ES5
function f(x,y){
    var a = Array.prototype.slice.call(arguments,2);
    return (x+y) * a.length;
};
//ES6
function f(x,y, ...a){
    return (x+y) * a.length
}
//console.log(suma(1));