var arreglo = [1,2,3,4,5]
//ES6 -> nuevas funciones find and findIndex
console.log(arreglo.find(x => x >3))
console.log(arreglo.findIndex(x => x >3))

//ES5 -> method filter and [0]
console.log(arreglo.filter(function(x){ return x >3;})[0]);
