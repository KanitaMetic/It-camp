const demir = "Demir";

for (let i = 0; i < 10; i++) {
  console.log(demir);
}

//Ispisati brojeve od 1 do 10, izuzev broja 2 i broja 5

// for (let i = 1; i <= 10; i++){
//     console.log(i)
//     if (i = 6; i <= 10; i++)
// }

//1. Nacin
for (let i = 1; i <= 10; i++) {
  if (i !== 2 && i !== 5) {
    console.log(i);
  }
}

//2.Nacin
for (let i = 1; i <= 10; i++) {
  if (i === 2 || i === 5 || i == 7) {
    continue;
  } else {
    console.log(i);
  }
}

//2. Ispisati sve brojeve od 1 do 10. Ako je neki broj deljiv sa 7 neka se prekine petlja.

// break izvrsava prekidanje petlje. Ako zelimo da se u nekom momentu prestanje izvrsavanje onda koristimo break.

for (let i = 1; i <= 10; i++) {
  console.log(i);
  if (i % 7 === 0) {
    break;
  } else {
    console.log(i);
  }
}

// 1.
// Neka se izvrsi iteracija od broja 99 do -99.
// Ispisati zbir broja deljivog sa 4 i broja 14.

// 2.
// Izracunati aritmeticku sredinu brojeva koji su deljivi sa 3.
// Iteracija se vrsi od 3 do 17.

//2.

let novac = 0;
let korisnik = 0;

for (i = 3; i <= 17; i++) {
  if (i % 3 === 0) {
    novac += i;
    korisnik++;
  }
}

if (korisnik === 0) {
  console.log("Nema brojeva deljivih sa 3.");
} else {
  let aritmetickaSredina = novac / korisnik;
  console.log(
    "Aritmeticka sredina brojeva deljiva sa 3 je: ",
    aritmetickaSredina
  );
}

let zbir = 0;

for (let i = 99; i >= -99; i--) {
  if (i % 4 === 0 || i % 14 === 0) {
    zbir += i;
    console.log(i);
  }
}
