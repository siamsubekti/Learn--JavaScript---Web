const kopral = {};
kopral.nama = 'Jhon Thor';
kopral.toString = function () {return `Saya kopral ${this.nama}`;}
kopral.getNama = () => kopral.nama;


const Jendral = function (nama) {
    this.nama = nama;
    this.toString = function(){return `Saya ${nama}`};
}

const jendral = new Jendral ('Rambo Tan');
console.log(jendral);
console.log(Jendral.toString());
console.log(typeof jendral);

class Panglima {
    Panglima() {}

    setNama(nama) {
        this.nama = nama;
    }
    getNama() {
        return this.nama;
    }
     
    toString() {
        return `Saya panglima $(this.nama)`;
    }
}

const panglima = new panglima();
panglima.setNama("Pang Lima");


console.log("==========================================");
console.log(kopral);
console.log("Nama kopral : ")