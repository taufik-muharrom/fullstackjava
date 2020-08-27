let data = [10,23,456,21,77,85,19,92,43,35];
arrayNumb =[];

// bilangan prima
let hasilprima = data.map((number) => {
    
    for (var i = 2; i <= number; i++) {
        if (number%i===0) {
            notPrime = false;
        }
    }
    if (notPrime === false) {  
        arrayNumb.push(number);
    }
})
console.log("hasil bilangan prima = "+arrayNumb);

// lebih besar dari 636
let hasil636 = data.filter((x) => x * 17 > 636);
console.log("lebih besar dari 636 jika dikali 17 = "+hasil636)

// habis dibagi 3
let habisbagi3 = data.filter((x)=> x % 3 === 0);
console.log("hasil habis dibagi 3 = "+habisbagi3); 

// luas kubus
let luasKubus = data.map((x) => 6*Math.pow(x,2));
console.log("luas kubus = "+luasKubus);

// volume kubus
let kubus = data.map((x) => Math.pow(x,3));
console.log("volume kubus = "+kubus);

//luas lingkaran
let lingkaran = data.map((x) => Math.PI * Math.pow(x,2));
console.log("luas lingkaran= "+lingkaran);





