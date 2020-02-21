
//perkalian cara : 1
calculate = (x,y) => {
    if (y == null) {
    return (z)=> {
        console.log(x*z);
        }
    }
    console.log(x*y);
}


calculate(3)(2);
calculate(3,1);
//output 3
//output 6



//perkalian cara 2 :

// multiply = function() {
//     let tampung = [];
//     for(let i of Object.keys(arguments)){
//         tampung.push(arguments[i]);
//     }
//     console.log(tampung.fill());
// }

// multiply(35,2,4,5,5,6,77);