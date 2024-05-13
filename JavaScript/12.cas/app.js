//While petlja se koristi za iteraciju kroz neki objekat.
//definise se drugacije u odnosu na for petlju.
// vreme = "Suncano";
// while (vreme === "Suncano") {
//   console.log("Danas je lep dan.");
//   vreme = "Kisovito";
// }
let i = 1;

while (i < 6) {
  console.log(i);
  //Kad zavrsimo celu logiku za kod pod odredjenim uslovom moramo menjati i.
  i++;
}

// do while petlja se koristi za iteraciju kroz neki objekat.
//Razlika u odnosu na while petlju je to sto se prvo izvrsava kod pa tek onda proverava uslov.
let j = 1;
do {
  console.log(j);
  j++;
} while (j < 6);

//nedostatak:
let z = 10;
do {
  console.log(z);
  z++;
} while (z < 6);

// traziti od korisnika da unese neki broj.
// Na osnovu te vrednosti izvrsiti ispis kvadrata brojeva od 1 do tog unetog broja:

const broj = +prompt("Unesite broj: ");
let iter = 1;
while (iter <= broj) {
  console.log(iter ** 2);
  iter++;
}

//Traziti unos brojeva od korisnika sve dok ne unese nulu:

// const nekiBroj = +prompt("Unesite nekiBroj: ");
// while (nekiBroj !== 0) console.log("Unesite broj razlicit nule ");

// let  korisnikovBroj = +prompt("Unesite vas broj");

// while (korisnikovBroj !== 0) {
//   korisnikovBroj = +prompt("Unesite neki broj:")

let proizvod = 1;
for (let i = 1; i < 6; i++) {
  if (i % 2 !== 0) {
    proizvod *= i;
  }
}
console.log(proizvod);
