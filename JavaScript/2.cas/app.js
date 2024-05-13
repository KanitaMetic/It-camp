naslov = document.getElementById("naslov");
naslov.innerHTML = "Naslov ispisan preko JavaScripta";
naslov.style = "color: blue; font-size: 52px";

// TIPOVI PODATAKA //

// Da bismo znali tip promenljive u JavaScriptu koristimo typeof operator.

// Tipovi podataka u JavaScriptu se dele u dve grupe:
// 1.  Primitivni tipovi podataka (vrednosni)
// 2.  Neprimitivni tipovi podataka (referentni)

// 1.1. string - Niz karaktera koji je zapisan pod navodnicima. Obicnim ili duplim.
console.log("Ovo je nas prvi string.");
console.log(typeof "Ovo je nas prvi string.");

// 1.2. number - Predstavlja broj i on moze biti zapisan sa ili bez decimalnog zareza.

console.log(25);
console.log(typeof 25);

// 1.3. BigInt - Brojevi koji prelaze granice obicnih brojeva.

console.log(BigInt(28374562987345629837465298736458723465872346));
console.log(typeof BigInt(28374562987345629837465298736458723465872346));

// 1.4. Boolean - je logicki entitet koji ima dve vrednosti: false i true, bez navodnika ili je false ili je true
// true boolean - logicki ispravno,
// false boolean - logicki neispravno
console.log(true);
console.log(typeof true);
// 1.5. undefined - Promenljiva koja je definisana, ali joj nije dodeljena vrednost, ima vrednost undefind i tip takodje undefind.
// var a; Neka a memorija postoji
var a;
// var = 5, je memorija koja ima vrednost 5
console.log(a);
console.log(typeof a);

// 1.6. null - Predstavlja nekorektnu vrednost ili vrednost koja (za sada) ne postoji.

var a = null;
console.log(a);
console.log(typeof a);
// 1.7. Symbol - Tip podataka za pravljenje(skladiste) anonimnih i unikatnih vrednosti.

b = Symbol("Demir");
console.log(b);
console.log(typeof b);
// CLG I ENTER JE SKRACENO ZA UPISIVANJE CONSOLE.LOG

// 1. Primitivni tipovi podataka mogu skladistiti samo jednu vrednost.

// 2. Neprimitivni tipovi podataka(referenti)

// ZA SKLADISTENJE VISE VREDNOSTI, ILI KOMPLEKSNIH VREDNOSTI SE KORISTE neprimitvni tipovi podataka.
// Svaka promenljiva koja nije PRIMITVNOG tipa je tipa Object u JavaScriptu.
// Objekti se koriste za skladistenje neke kolekcije podataka.

// 2.1. Array (Niz) - predstavlja strukturu podataka za skladistenje vise vrednosti.
// Elementi niza ne moraju biti istog tipa.

niz = ["Demir", 18, true];

// 2.2 Object (objekat) - predstavlja strukturu podataka za skladistenje vise vrednosti.Objekti se zapisuju u key:value, a moze i (name:value) parovima.

// obj = {
//   ime: "Demir",
//   brojGodina: 18,
//   punoletan: true,
// };

obj = {
  ime: "Demir",
  brojGodina: 18,
  punoletan: true,
};
console.log(obj);

// 2.3 Set - predstavlja strukturu podataka za skladistenje vise vrednosti. Duplikati nisu dozvoljeni.

set = new Set(["Kanita", 19, true]);
console.log(set);
console.log(typeof set);

// 2.4. Map - predstavlja strukturu podataka za skladisanje vise vrednosti. Slicni su objektima.

map = new Map([
  ["ime", "Kanita"],
  ["brojGodina", 19],
  ["punoletnost", true],
]);
console.log(map);
console.log(typeof map);
