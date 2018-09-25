//Tipos de datos unicos e inmutables
Symbol("foo") !== Symbol("foo")
const foo = Symbol()
const bar = Symbol()
typeof foo === "symbol"
typeof bar === "symbol"
let obj = {}
obj[foo] = "foo"
obj[bar] = "bar"
obj["name"] = "raul"
console.log(Object.keys(obj))
console.log(Object.getOwnPropertyNames(obj)) //name
console.log(Object.getOwnPropertySymbols(obj)) //foo, bar