function lastIndex(str) {
  lastIndex = str.lastIndexOf(" ");
  return lastIndex;
}
console.log(lastIndex("Pera ima devojku"));

//8.Ispisati duzinu prve reci unetog stringa. Npr za uneto "Pera ima devojku", rezultat je 4.

// function lengthIndex(str) {
//   lengthIndex = str.lengthIndexOf();
//   return lengthIndex;
// }
// console.log(lengthIndex("Amina je mala."));

const duzinaPrveReci = (str) => str.indexOf(" ");
console.log(duzinaPrveReci("Danas smo bas tihi"));

// Za uneti string A treba kreirati novi string B koji se sastoji od prve i poslednje reci(odvojenih razmakom) unetog stringa. Npr. za A='Svuda podji, kuci dodji', i dobija se B='Svuda dodji'. Podrazumeva se da uneti string nema vodece razmake.

const firstAndLast = (A) => {
  let B = "";
  const firstWord = A.slice(0, A.indexOf(" "));
  const lastWord = A.slice(A.lastIndexOf(" "));
  B += `${firstWord} ${lastWord}`;
  return B;
};
console.log(firstAndLast("Svuda podji, kuci dodji"));

function izdvojiZnakoveSLS(str, N) {
  if (N >= str.length) {
    return str;
  } else {
    return str.slice(0, N);
  }
}

// Primer korišćenja:
let str = "Pera ima devojku";
let N = 6;
let rezultat = izdvojiZnakoveSLS(originalniString, N);

console.log(rezultat);

// 2.	Izdvojiti N znakova sa desne strane (poslednjih N znakova) unetog stringa. Npr. za string 'Pera ima devojku' i N=5, dobija se 'vojku'.
