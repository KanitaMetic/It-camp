// 1. Napisi program koji ce trazite od korisnika da unese broj, a zatim ispisi poruku koja ce reci da li je broj pozitivan, negativan ili nula.

const broj = Number(prompt("Unesite neki broj"));

if (isNaN(broj)) {
  console.log("Niste uneli broj");
} else if (broj < 0) {
  console.log("Broj je negativan");
} else if (broj === 0) {
  console.log("Broj je jednak nulin");
} else {
  console.log("Broj je pozitivan");
}

// 2. Napiši program koji će korisnika pitati za unos ocene (broj između 0 i 100) i ispisati odgovarajuću ocenu (A, B, C, D ili F) prema standardnom školskom sistemu ocenjivanja.

const ocena = Number(prompt("Ispisati odgovarajuću ocenu"));

if (isNaN(ocena)) {
  console.log("Niste ispisali odgovarajuću ocenu");
} else if (ocena >= 90) {
  console.log("Vasa ocena je A");
} else if (ocena >= 80) {
  console.log("Vasa ocena je B");
} else if (ocena >= 70) {
  console.log("Vasa ocena je C");
} else if (ocena >= 60) {
  console.log("Vasa ocena je D");
} else {
  console.log("Vasa ocena je F");
}

// 3. Napiši program koji će korisnika pitati za unos broja, a zatim ispisati poruku da li je broj paran ili neparan.

const broj1 = Number(prompt("Unesite neki broj"));

if (isNaN(broj1)) {
  console.log("Niste ispisali paran broj");
} else if (broj1 % 2 === 0) {
  console.log("Broj je paran");
} else {
  console.log("Broj je neparan");
}

// 4. Napiši program koji će tražiti od korisnika da unese dva broja, a zatim ispisati poruku koja će reći koji od ta dva broja je veći, ili da su jednaki.

const uporedi = Number(prompt("Unesite dva broja"));

if (isNaN(uporedi)) {
  console.log("Niste ispisali broj");
} else if (17 > 10) {
  console.log("Prvi broj je veći od drugog");
} else if (7 < 50) {
  console.log("Drugi broj je veći od prvog");
} else {
  console.log("Oba broja su jednaka");
}
