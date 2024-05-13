// function izdvojiZnakoveSLS(str, N) {
//   if (N >= str.length) {
//     return str;
//   } else {
//     return str.slice(0, N);
//   }
// }

// // Primer korišćenja:
// var str = "Pera ima devojku";
// let N = 6;
// let rezultat = izdvojiZnakoveSLS(originalniString, N);

// console.log(rezultat);

function izdvojiZNZnakovaSaLeveStrane(str, N) {
  if (N >= str.length) {
    return str;
  } else {
    return str.slice(0, N);
  }
}

let originalniString = "Pera ima devojku";
let N = 6;
let rezultat = izdvojiZNZnakovaSaLeveStrane(originalniString, N);

console.log(rezultat);

// function izdvojiNPoslednjihZnakova(str, N) {
//   if (N >= str.length) {
//     return str; // Ako je N veće ili jednako dužini stringa, vraćamo ceo string
//   } else {
//     return str.slice(-N); // Inače, koristimo metodu slice() za izdvajanje poslednjih N znakova
//   }
// }
// let noviString = "Pera ima devojku";
// let N1 = 5;
// let rezuultat = izdvojiPoslednjihNznakova(noviString, N1);
// console.log(rezuultat);
