// 2. Napraviti funkciju koja trazi od korisnika da unese neku recenicu, zatim funkcija vraca, datu recenicu u vise oblika (spojenu u jedan string).
// 1. recenicu ispisanu velikim slovima;
// 2. recenicu ispisanu malim slovima;
// 3. pola recenice ispisano velikim slovima, pola recenice ispisano malim slovima;
// 4. Ako se u recenici nadje rec 'skola' neka bude zamenjena recju 'fakultet'.

// const drugi = () => {
//     const recenica = propmt("Unesite recenicu: ");
//     const recenicaV = recenica.toUpperCase();
//     const recenicaM = recenica.replace(/skola/gi, "fakultet");
//     const srednjiIndex = renica.toLowerCase();
//     const recenicaZ = rececenica.length/2
//     const prvaPolovina = recenica.slice(0, srednjiIndex)
//     const drugaPolovina = recenica.slice(srednjiIndex).toLowerCase()
//     const recenicaPP = prvaPolovina.concat(drugaPolovina)
//     return `${recenicaV} \n${recenicaM}\n ${recenicaZ}\n`
// };

//Ekstratovanje karaktera mozemo odraditi na 3 razlicita  nacina:

//charAt(position)
//charCodeAt(position)
//Pristupanje pomocu []

// const recenica = "Jos max 10 dana"
// console.log(recenica.charAt(5));
// console.log(recenica[5]);

// Ako karakter sa odredjenom pozicijom ne postoji charAt vraca "", dok string[*] vraca undefined

// Postoji nekoliko search metoda u JavaScriptu:

// index0f() metoda vraca index(poziciju) poslatog argumenta.

// console.log(recenica.indexOf("max"))

// // Ako trazena vrednost ne postoji, pozicija koju dobijamo iznosi -1.

// console.log(recenica.includes("skola"));

// //index0f metoda prihvata drugi argument. On predstavlja startnu poziciju za trazenje odredjene vrednosti.

// console.log(recenica.indexOf("max", 7));

// //lastIndex0f() metoda vraca poslednju poziciju poslatog argumenta.

// console.log(recenica.lastIndexOf("a"))

// // search metoda vraca index (poziciju) poslatog argumenta.(drugi argument kulira)
// console.log()

// function zameniRec(originalniString, recZaZamenu) {
//     let regex = new RegExp(recZaZamenu, 'g');
//     let rezultat = originalniString.replace(regex, '#');
//     return rezultat;
// }
// let originalniString = "Danas je lep dan.";
// let recZaZamenu = "lep";

// let rezultat = zameniRec(originalniString, recZaZamenu);
// console.log(rezul
