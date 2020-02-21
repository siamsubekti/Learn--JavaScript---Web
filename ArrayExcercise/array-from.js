console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

//with arrowFunction
console.log(Array.from([1, 2, 5], x => x + x));
// expected output: Array [2, 4, 6]

// not use arrowFunction:
// console.log(Array.from([1, 2, 5], function (x) {
// return x + x;
// }));
// expected output: Array [2, 4, 6]