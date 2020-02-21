let project = function () {
    const text = []
    for(const i of Object.keys(arguments)) {
        text.push(arguments[i]);
    }
  console.log(text.join());   
}

project("2" + "2");
project(1 +"2"+"2");
project(1 + -1 + "2");
project(+"1" + "1" + "2");
project("A" - "B" + 2);
project("A" - "B" + 2); 

project("0 && 1 = " + (0 && 1));