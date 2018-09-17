var cursos = { curso: 'Vue.js', descripcion: 'Framework javascript'}
var alimentos = { alimento: 'Pollo frito'}
var persona = { nombre:'Raul', edad:25}
//ES5
Object.keys(cursos).forEach(function(k) {
    persona[k] = cursos[k];
})
Object.keys(alimentos).forEach(function(k) {
    persona[k] = alimentos[k];
})
console.log(persona);
//ES6
Object.assign(persona, cursos, alimentos)
console.log(persona)


