const fetch = require('node-fetch');

async function makeRequest() {

// async function getTodos() {
// const urls = [
//     'https://jsonplaceholder.typicode.com/todos/1',
//     'https://jsonplaceholder.typicode.com/todos/2',
//     'https://jsonplaceholder.typicode.com/todos/3'
//   ];
  
//     const responses = [];
//     await urls.forEach(async (url, idx) => { 
//       const todo = await fetch(url);
//       let request = await todo.json();
//       responses.push(request);
//       console.log(`Received Todo ${idx+1}:`, responses);
//     return responses;
//     });
    
//     // console.log('Finished!');
//   }

// let result = getTodos();
// result.then((data) => {
//     console.log(data);
// });


const urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3'
  ];
     
    const responses = [];
    for (const url of urls) {
      const todo = await fetch(url);
      responses.push(await todo.json());

// for (const [idx,url] of urls) {
//     const todo = await fetch(url);
//     responses.push(await todo.json();
//     console.log(`Received Todo ${idx+1}:`, responses); 
      
  
    }return responses;
  
  }
  
const urls = makeRequest();
urls.then((ab) => console.log(ab));





// const responses = [];
// for (const [idx,url] of urls) {
//   const todo = await fetch(url);
//   let request = 
//   responses.push(await todo.json()`Received Todo ${idx+1}:`, todo);

// }return responses;

// }