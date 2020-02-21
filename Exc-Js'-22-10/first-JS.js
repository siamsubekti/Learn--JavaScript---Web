console.log("Hello cute")

for (let i=0; i <=10; i++) {
    console.log('angka ' + i); console.log(`${i} = disini adalah menggunakan variable dalam string`);
}

const angka = [1,2,3,4,5,6,7,8,9]

//membuat array baru dari array angka yang isinya adalah bilangan habis dibagi 2
const filteredArray = angka.filter(item => item % 2 === 0);

console.log(filteredArray); 

for(let i=0; i<=9; i++) {
    if(i%2 == 0) continue;
    console.log (i);
}

var foo = ['one', 'two', 'three'];
var [red, yellow, blue] = foo;
console.log(red);
console.log(yellow);
console.log(blue);