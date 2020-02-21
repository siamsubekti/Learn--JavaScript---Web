var map1 = new Map();
map1.set('bar', 'foo');
map1.set('bur', 'fee');
map1.set('bor', 'fii');

console.log(map1.delete('bar'));
// expected result: true
// (true indicates successful removal)

console.log(map1.has.length('bur'));
// expected result: false
for(let y of map1){
console.log(y);
}
