function jumlah(a,  b, cb) {
    setTimeout(function() {
        if (cb) cb(a + b);
        else return a + b;
    },2000);
}

function kurang(a, b, cb) {
    setTimeout(function() {
        if (cb) cb(a + b);
        else return a + b;
    },2000);
}

function kali(a, b, cb) {
    setTimeout(function() {
        if (cb) cb(a + b);
        else return a + b;
    },2000);
}

function bagi(a, b, cb) {
    setTimeout(function() {
        if (cb) cb(a + b);
        else return a + b;
    },2000);
}

let start = new Promise((resolve, reject) =>{
    jumlah(10, 2, resolve);
});

start
    .then((sum) => {
        return new Promise((resolve, reject) => {
            kurang(sum, 2, resolve);
        });
    })
    .then((sub) => {
        return new Promise((resolve, reject) => {
            kali(sub, 3, (result) => reject(new Error('eror test function')))
        });
    })
    .then((mul) => {
        return new Promise((resolve, reject) => {
            kali(mul, 3, resolve);
        });
    })
    .then((res) => {
        console.log('promise result: ', res);
        });
    
    