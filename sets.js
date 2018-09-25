//ES5
var s = {}
s["name"] = "Raul"; s["edad"] = 23; s["name"] = "kelly"
console.log(Object.keys(s).length === 2)
console.log(s["name"] === "kelly")
for (var key in s)
    if (s.hasOwnProperty(key))
        console.log(s[key])
//ES6
console.log("ES6")
let c = new Set()
c.add("name").add("edad").add("name")
console.log(c.size === 2)
console.log(c.has("name") === true)
for (let key of c.values())
    console.log(key)