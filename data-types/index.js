// const regionData = require('./indonesia.json');

// for (let i of regionData) {
//     console.log(i);
// }

// for (let d in regionData) {
//     console.log(d);
// }

// const find = regionData.find((element) => {
//     return (element.name.indexOf("JAKARTA") > -1);
// });

// console.log(find);

// var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

// console.log("=============filter==============")
// const filterItems =  regionData.filter((el) => {
//         return (el.name.indexOf('JAK') > -1);
//     });


// console.log(filterItems);

// function filterfilter(regionData, query) {
//     return regionData.filter((er) => {
//         return er.to
//     })
// }





// friends - an array of objects 
// where object field "books" - list of favorite books 
var friends = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
  }, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
  }, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
  }];
  
  // allbooks - list which will contain all friends' books +  
  // additional list contained in initialValue
  var allbooks = friends.reduce(function(accumulator, currentValue) {
    return [...accumulator.books, ...currentValue];
  }, ['Alphabet']);
  
  // allbooks = [
  //   'Alphabet', 'Bible', 'Harry Potter', 'War and peace', 
  //   'Romeo and Juliet', 'The Lord of the Rings',
  //   'The Shining'
  // ]

  console.log(allbooks);