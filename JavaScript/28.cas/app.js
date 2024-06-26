// Metode:
// Postoje 4 metode za zaokruzivanje brojeva u JS:

// Math.round(x)
const x = 2.51;
const y = Math.round(x);
console.log(y);

// Math.ceil(x)
// const a = 2.31;
// const b = Math.ceil(a);
// console.log(b);
// console.log(Match.ceil(-2.31));

// Math.trunc(x)
// const l = 2.31;
// const m = Math.trunc(l);
// console.log(m);

// // Math.sign() metoda vraca -1 ili 0 ili 1 (radi se o pozitivnim, negativnim i 0 brojevima)
// console.log(Math.sign(-222)); // -1 -radi se o negativnom broju

// console.log(2 ** 2);
// console.log(2 ** 10);

// // Math.pow(x,y) metoda vraca vrednost x**y
// console.log(Math.pow(2, 3));

// // Math.sqrt(x) metoda vraca kvadratni koren broja x

// console.log(Math.sqrt(16));

// // Math.abs(x) vraca apsolutnu vrednost broja x
// console.log(Math.abs(-5));
// console.log(Math.abs(5));

// // Math.min() i Math.max() vraca najmanju, tj. najvecu vrednost iz poslate liste brojeva

// console.log(Math.min(2, -90, 88, 101));
// console.log(Math.max(2, -90, 88, 101));

// // Math.random() metoda vraca random broj izmedju 0(ukljucjuci) i 1(nije ukljucena)

// console.log(Math.random());

// // Pomocu Math.random() metode dobiti broj izmedju 1 i 5:

// console.log(Math.ceil(Math.random() * 5));

// // Pomocu Math.random() metode dobiti broj izmedju 50 i 100:

// console.log(Math.ceil(Math.random() * 50) + 50);

// // split() metoda pretvara string u niz.
// const recenica = "Kanita je kasnila, sto je inace njeno drugo ime.";
// console.log(recenica.split());
// console.log(recenica.split(","));

function decimals(num1, num2) {
  return num1.toFixed(num2);
}
console.log(decimals(2.100212, 2));

// 2. Unesite broj sekundi koji zelite pretvoriti u sate, minute i sekunde:

const time = (sec) => {
  const hours = Math.floor(sec / 3600);
  const minutes = Math.floor((sec - hours * 3600) / 60);
  const seconds = Math.floor(sec - (hours * 3600 + minutes * 60));
  return `${hours} \n${minutes} \n${seconds}`;
};
console.log(time(3670));
