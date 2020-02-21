let checkAge = function(age, print) {
    let valid = false;
    if (age > 10) valid = true;

    return print(valid);
}

console.log(checkAge(17, function (result) {
    if (result) return "OK";

    return "NOT OK";
}))


//callback function with 2 :
let check = function (bilangan, print) {
    let checkValid = false;
    if (bilangan%2 == 1) checkValid = true;

    print(checkValid, bilangan);

    
} 
check(10, function (bil, bilangan) {
    
    if (bil)
        console.log (bilangan + " bilangan ganjil");
    else{
        console.log (bilangan + " bilangan genap"); 
    }
 });

 //callback function with 1:
 let go = function (check, print) {
    let checkto; 
     if (check%2 == 1){ checkto = check + " bilangan ganjil";
    }else {
         checkto = check + " bilangan genap"
     }

     print(checkto);

 } 
 go (3, console.log);