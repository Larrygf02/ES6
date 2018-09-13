vector = [1,2,3,4,5]
//ES5
odds = vector.map(function(v){ return v+1 })
//ES6
odds6 = vector.map(v => v +1);

pairs = []
//ES5
vector.forEach(function(v){
    if(v % 2 === 0)
        pairs.push(v);
})
//ES6
vector.forEach(v => {
    if (v % 2 === 0)
        pairs.push(v);
});

