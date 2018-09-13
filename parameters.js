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
//ES5
var pairs = ['hola',true,4]
var z = [1,2].concat(pairs)
var name = 'kelly'
var chars = name.split("");

//ES6
var others = [1,2, ...pairs]
var chars = [...name]
console.log(others)
console.log(chars)