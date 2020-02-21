let ar = [1,2,3,4,5,6];
// for(let i = 0; ar.length; i++) 
// let slice = ar.slice(1, 3);
// ar.slice(4,1);
// console.log(ar);
        
ar.splice(0,2); //[3,4,5,6]
console.log(ar);    


// ar.length = 4; // set length to remove element
// ar.pop(); //return index ke 6.
// ar.shift(); //return index ke "zero" atau 0.
// var remove = ar.splice(2,2);
/*
removed === [3,4]
ar === [1,2,5,6]
*/


// var arr = [1,2,3,4,5,6,7,8,9]

// for( var i = 0; arr.length; i++) {
//     if(arr[i] === 5) {
//         arr.splice(i, 1);
//     }
// }
// console.log(arr);


// let array = [];
// for(const i of Object.keys(arguments)){
//     array.push(arguments[i]);
// }
// console.log(array);


// let arr = [];
// for(i=0; i <=9; i++) {
//     arr.push(i);
// }

// console.log(arr);



// let arr= [];

// arr.push(ini = `satu`);
// arr.push(ono = `dua`);

// arr.push(ene = 'kawe')

// for(let i of arr) {
//     console.log(i);
// }

// for(let prep in arr) {
//     console.log("arr" + prep + " = " + arr[prep]);
// }