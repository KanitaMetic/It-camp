// Ispisati brojeve od 1 do 10 u konzoli jedan ispod drugog:

// 1.Nacin
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

//2.Nacin

//Za iteraciju kroz neki objekat(niz, karaktere stringa...)
// u JavaScriptu koristimo petlju.
// Postoje 3.petlje u JS

// 1. for petlja:
// for (statement1; statement2; statement3) {
//   // kod koji se izvrsava u svakoj iteraciji
// }
//statement1 - izvrsava se samo na pocetku i predstavlja definisanje iteratora.

//statement2 - predstavlja granicu do koje ce se petlja izvrsavati

//statement3 - promena vrednosti iteratora koja se desava nakon svake iteracije.

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// const broj1 = prompt + "Unesite prvi broj:";
// const broj2 = prompt + "Unesite drugi broj:";

// if (broj1 === broj2) {
//   const povrsinaKvadrata = broj1 * broj1;
//   console.log("Povrsina kvadrata je: " + povrsinaKvadrata);
// } else {
//   const povrsinaKvadrata = broj1 * broj2;
//   console.log("Povrsina pravougaonika je: " + povrsinaPravougaonika);
// }

// switch (mesec) {
//     case 1:
// }
let broj1 = +prompt("Unesite prvi broj:");
let broj2 = +prompt("Unesite drugi broj:");

if (broj1 === broj2) {
  // Povrsina kvadrata
  let povrsina = broj1 * broj1;
  console.log("Povrsina kvadrata je: " + povrsina);
} else {
  // Povrsina pravougaonika
  let povrsina = broj1 * broj2;
  console.log("Povrsina pravougaonika je: " + povrsina);
}

let x = +prompt("Unesite vrednost za x:");
let y = +prompt("Unesite vrednost za y:");

switch (true) {
  case y !== 0:
    console.log("Kolicnik x/y je: " + x / y);
    break;
  default:
    console.log("Deljenje je nemoguce.");
    break;
}

let mesec = +prompt("Unesite broj meseca (od 1 do 12):");

if (mesec >= 1 && mesec <= 12) {
  switch (true) {
    case mesec >= 3 && mesec <= 5:
      console.log("Prolece");
      break;
    case mesec >= 6 && mesec <= 8:
      console.log("Leto");
      break;
    case mesec >= 9 && mesec <= 11:
      console.log("Jesen");
      break;
    default:
      console.log("Zima");
      break;
  }
} else {
  console.log("Neispravan unos meseca.");
}

let broj3 = +prompt("Unesite prvi broj:");
let broj4 = +prompt("Unesite drugi broj:");
let operacija = prompt("Unesite operaciju (+, -, *, /):");

switch (operacija) {
  case "+":
    console.log("Rezultat sabiranja je: " + (broj3 + broj4));
    break;
  case "-":
    console.log("Rezultat oduzimanja je: " + (broj3 - broj4));
    break;
  case "*":
    console.log("Rezultat mnozenja je: " + broj3 * broj4);
    break;
  case "/":
    if (broj2 !== 0) {
      console.log("Rezultat deljenja je: " + broj3 / broj4);
    } else {
      console.log("Deljenje nulom nije dozvoljeno.");
    }
    break;
  default:
    console.log("Nepodrzana operacija.");
    break;
}
//Swich koristimo za neku vrednost koja nam je tacna, i pretpostavljamo da je to jedan iznos.
