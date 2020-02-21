console.log("==================1================");
let map = new Map();

map.set('1', `str1`);
map.set(1, `num1`);
map.set(true, `bool1`);

console.log(map.get(1)); //num1
console.log(map.get('1')); //str1
console.log(map.size); //3

console.log("==================2================");

let jhon = { name : "Jhon"};

let visitCountMap = new Map();

visitCountMap.set(jhon, 123);
console.log(visitCountMap.get(jhon));

console.log("==================3================");

let receive = new Map([
    [`tomatos`, 20],
    [`chili`, 30],
    [`onion`, 40]
]);


//iterate over keys 
for (let vegetables of receive.keys()) {
    console.log(vegetables);
}

console.log("==================4================");
//iterate over values
for(let grade of receive.values()) {
    console.log(grade);
}

console.log("==================5================");
//iterate over [ket, values] entries
for (let entries of receive) {
    console.log(entries);
}

console.log("==================6================");
receive.forEach( (values, keys, map) => {
    console.log(`${keys} : ${values}`);
});


console.log("==================7================");
var map1 = new Map();

map1.set('bar', 'foo');
map1.set('bar', 'bar');
map1.set('bar', false);

console.log(map1.has('bar'));

console.log(map1.has('bar'));

console.log("=================8==================")
const apa = new Map([ ['foo', 'bar'], ['baz', 42] ]);
const obj = Object.fromEntries(apa);
console.log(obj); // { foo: "bar", baz: 42 }

console.log("=================9==================");
let iterator = apa.entries();
// console.log(iterator.next().value);
console.log(iterator);