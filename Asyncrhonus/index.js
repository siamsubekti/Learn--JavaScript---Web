function jumlah(a,b, cb) {
    setTimeout(function() {
       if(cb) cb(a + b);
    },2000);
}

const hasil = jumlah(1, 2);

jumlah(1, 2, function(sum) {
console.log('hasil 1: ', hasil);
});

jumlah('hasil 2: ',console.log(1,2));

// console.log()