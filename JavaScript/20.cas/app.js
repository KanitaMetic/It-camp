console.log("pokretanje preko node.js");

// JavaScript Template Literal
//Template Literals koristi Back Tics sintaksu (``) za ispisivanje stringa.
// U pitanju je: Back Tics sintaksa

console.log(`Kanita je dosla`);

// Navodnici unutar stringa:
// Sa Template Literals mozemo koristiti navodnike (duple ili obicne) unutar stringa.

console.log(`String u "drugacijoj" sintaksi`);
console.log(`String u "drugacijoj" sintaksi`);

//Stringovi u vise redova

//Template Literals nam omogucava multiline strings.

// const recenica = ``

// Interpolacija

// Template Literals nam omogucavaju lagan nacin za prikazivanje promenljivih unutar stringa.

const ime = `Amir`;
const godine = 16;

const poruka = `Nas kolega ${ime} ima ${godine} i on je danas uradio svoj prvi domaci.`;

console.log(poruka);

// replace() metoda se koristi za menjanje specificnog karaktera ili niza karaktera odredjenog stringa.

// Po defaultu, replace() metoda menja samo prvi match (prvo preklapanje).

const recenica2 = "Danas je padao sneg. Mada veceras takodje pada sneg";
const recenica3 = recenica2.replace("sneg", "kisa");
console.log(recenica2);
console.log(recenica3);

// Za menjanje reci (case insensitive) mozemo koristiti regular expression sa /i

const recenica4 = recenica2.replace(/sneg/i, "kisa");
console.log(recenica4);

//regular expression /g nam omogucava menjanje svih matcheva(poklapanja) koliko god da ih ima.

const recenica5 = recenica2.replace(/sneg/g, "kisa");
console.log(recenica5);

const recenica6 = recenica2.replace(/sneg/gi, "kisa");
console.log(recenica6);
// 2. Napraviti funkciju koja trazi od korisnika da unese neku recenicu, zatim funkcija vraca, datu recenicu u vise oblika (spojenu u jedan string).
// 1. recenicu ispisanu velikim slovima;
// 2. recenicu ispisanu malim slovima;
// 3. pola recenice ispisano velikim slovima, pola recenice ispisano malim slovima;
// 4. Ako se u recenici nadje rec 'skola' neka bude zamenjena recju 'fakultet'.

function obradiRecenicu() {
  // Unos korisnika
  var recenica = prompt("Unesite recenicu:");

  // 1. Recenica ispisana velikim slovima
  var velikaRecenica = recenica.toUpperCase();

  // 2. Recenica ispisana malim slovima
  var malaRecenica = recenica.toLowerCase();

  // 3. Pola recenice ispisano velikim, pola malim slovima
  var polaVelikaPolaMala = "";
  for (var i = 0; i < recenica.length; i++) {
    if (i < recenica.length / 2) {
      polaVelikaPolaMala += recenica[i].toUpperCase();
    } else {
      polaVelikaPolaMala += recenica[i].toLowerCase();
    }
  }

  // 4. Zamjena riječi 'skola' sa 'fakultet'
  var zamijenjenaRecenica = recenica.replace(/skola/g, "fakultet");

  // Ispis rezultata
  console.log("1. Recenica ispisana velikim slovima: " + velikaRecenica);
  console.log("2. Recenica ispisana malim slovima: " + malaRecenica);
  console.log("3. Pola velika, pola mala: " + polaVelikaPolaMala);
  console.log(
    "4. Zamijenjena rijec 'skola' sa 'fakultet': " + zamijenjenaRecenica
  );
}

// Pozivanje funkcije
obradiRecenicu();
function obradiRecenicu() {
  // Unos korisnika
  var recenica = prompt("Unesite recenicu:");

  // 1. Recenica ispisana velikim slovima
  var velikaRecenica = recenica.toUpperCase();

  // 2. Recenica ispisana malim slovima
  var malaRecenica = recenica.toLowerCase();

  // 3. Pola recenice ispisano velikim, pola malim slovima
  var polaVelikaPolaMala = "";
  for (var i = 0; i < recenica.length; i++) {
    if (i < recenica.length / 2) {
      polaVelikaPolaMala += recenica[i].toUpperCase();
    } else {
      polaVelikaPolaMala += recenica[i].toLowerCase();
    }
  }

  // 4. Zamjena riječi 'skola' sa 'fakultet'
  var zamijenjenaRecenica = recenica.replace(/skola/g, "fakultet");

  // Ispis rezultata
  console.log("1. Recenica ispisana velikim slovima: " + velikaRecenica);
  console.log("2. Recenica ispisana malim slovima: " + malaRecenica);
  console.log("3. Pola velika, pola mala: " + polaVelikaPolaMala);
  console.log(
    "4. Zamijenjena rijec 'skola' sa 'fakultet': " + zamijenjenaRecenica
  );
}

// Pozivanje funkcije
obradiRecenicu();
