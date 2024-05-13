// Sva velika slova u stringu treba svesti na mala slova.
//  Npr. za uneto WEBnSTUDY.com, dobija se novi string "webnstudy.com".

// function malaSlova(recenica) {
//     let brojac = 0;
//     for (let i = 0; i < recenica.length; i++) {
//       if (recenica.Uppercase = "WEBnSTUDY.com" && recenica.Lowercase = "") {
//         brojac++;
//       }
//     }
//     return brojac;
//   }

const toLower = (str) => str.toLowerCase();
console.log(toLower("KOMBINAcija VELIKIH i Malih sloVA"));

//2. Pronaci poziciju poslednjeg razmaka u stringu. Npr. za uneto Pera ima devojku rezultat je 8.

const space = str.indexOf;
console.log(space("Pera ima devojku."));

function lastIndex(str) {
  lastIndex = str.lastIndexOf(" ");
  return lastIndex;
}
console.log(lastIndex("Pera ima devojku"));
