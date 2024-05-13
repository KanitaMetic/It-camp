// KONDICIONALI //

// (5 > 4) je uslov koji kada je zadovoljen izvrsice se deo koda izmedju viticastih zagrada.
if (5 > 4) {
  console.log("vece je");
}

trenutnoVreme = 12;

if (trenutnoVreme >= 6 && trenutnoVreme < 12) {
  console.log("Dobro jutro");
} else if (trenutnoVreme >= 12 && trenutnoVreme < 17) {
  console.log("Dobar dan");
} else {
  console.log("Dobro vece");
}

brojGodina = 27;

if (brojGodina >= 18) {
  console.log("Punoletni ste");
} else {
  console.log("maloletni ste");
}

brojGodina = 17;
if (brojGodina >= 18) {
  console.log("punoletni ste");
} else {
  console.log("maloletni ste");
}

const x = 12;
const y = 6;

if (y === 0) {
  console.log("Deljenje je nemoguce");
} else {
  console.log(x / y);
}
const brojGodina3 = "Unesite broj godina";
if (brojGodina3) {
  console.log("Niste uneli broj godina");
} else if (3 < 12) {
  console.log("Vi ste decijeg doba");
} else if (brojGodina3 >= 12 && brojGodina3 < 18) {
  console.log("Vi ste maloletni");
} else if (brojGodina3 >= 18 && brojGodina3 < 40) {
  console.log("Vi ste punoletni");
} else if (brojGodina3 >= 40) {
  console.log("Vi ste zrela osoba");
}
