// Switch naredbu koristimo kada zelimo kroz slucajeve pokriti tacne moguce vrednosti.

switch (5 - 3) {
  case 10:
    // kod koji se izvrsava ako je izraz === 10
    break;
  case 5:
    // kod koji se izvrsava ako je izraz === 5
    break;
  case 2:
    //kod koji se izvrsava ako je izraz === 2
    break;
  default:
  // kod koji se izvrsava ako nisu zadovoljeni prethodni slucajevi
}
// break zapravo prekida izvrsavanje naredbe.
// break keyword stavljamo na kraju slucaja da se ne bi izvrsio kod od narednog slucaja koji nije zadovoljen.

// ako je uneo broj izmedju 12 i 15 neka se ispise poruka; uneli ste vrednost broja
//defaultno: niste uneli broj iz trazenog opsega

// switch (12 && 13 && 14 && 15) {
//   case 12:
//     console.log("uneli ste vrednost broja"); NETACNO
//     break;
//   default:
//     console.log("Niste uneli broj iz trazenog opsega");
// }

const broj = +prompt("Unesite broj izmedju 12 i 15");

switch (broj) {
  case 12:
    console.log("uneli ste broj 12" + broj);
    break;
  case 13:
    console.log("uneli ste broj 13" + broj);
    break;
  case 14:
    console.log("uneli ste broj 14" + broj);
    break;
  case 15:
    console.log("uneli ste broj 15" + broj);
    break;
  default:
    console.log("niste uneli broj iz trazenog opsega");
}
// switch (broj) {
//   case 12:
//   case 13:
//   case 14:
//   case 15:
//     console.log("uneli ste broj " + broj);
//     break;
//   default:
//     console.log("niste uneli broj iz trazenog opsega");
// }

const dan = +prompt("Unesite dane u nedelji");

switch (dan) {
  case 1:
    console.log("Ponedeljak");
    break;
  case 2:
    console.log("Utorak");
    break;
  case 3:
    console.log("Sreda");
    break;
  case 4:
    console.log("Cetvrtak");
    break;
  case 5:
    console.log("Petak");
    break;
  default:
    console.log("niste uneli radni dan");
}
