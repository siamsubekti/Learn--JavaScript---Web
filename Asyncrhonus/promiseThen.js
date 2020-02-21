var p2 = new Promise(function(resolve, reject) {
    resolve(1);
  });
  
  p2.then(function(value) {
    console.log(value); // 1
    return value + 1;
  }).then(function(value) {
    console.log(value + ' - A synchronous value works');
  });
  
  p2.then(function(value) {
    console.log(value); // 1
  });

  console.log("=================================");

  var promise1 = new Promise(function(resolve, reject) {
    resolve('Success!');
  });
  
  promise1.then(function(values) {
    console.log(values);
    // expected output: "Success!"
  });
  
  