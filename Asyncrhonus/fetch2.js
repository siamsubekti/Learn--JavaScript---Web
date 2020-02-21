const fetch = require('node-fetch');
async function previa() {
    const urls = [
        'https://jsonplaceholder.typicode.com/todos/1',
        'https://jsonplaceholder.typicode.com/todos/2',
        'https://jsonplaceholder.typicode.com/todos/3'
        // 'https://jsonplaceholder.typicode.com/todos/4',
        // 'https://jsonplaceholder.typicode.com/todos/5',
        // 'https://jsonplaceholder.typicode.com/todos/10'
      ];

      const responses = [];
      for (const url of urls) {
          let request = await fetch(url);
        //   let resp = ;
          responses.push(await request.json());
      }
      return responses;
}

const urls = previa();
urls.then((ab) => console.log(ab));