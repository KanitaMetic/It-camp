// Postoji nekoliko nacina za prikazivanje podataka u JavaScriptu:
// 1.innerHtml

paragraf = document.getElementById("paragraf");
paragraf.innerHTML = "Ovo je paragraf.";

// 2. document.write() - koristi se samo za testiranje.

// 3. alert()
// alert("Upozorenje korisniku.");

// 4. console.log()

console.log(paragraf.innerHTML);

// JavaScript naziv mora pocinjati sa:
// 1. Slovom (velikim ili malim) (A-Z ili a-z)
// 2.  $ (dolar znakom)
// 3.  _ (donjom crtom)

// Promenljive od vise reci:

// nas brat = "Demir" Nije ispravan nacin
//  nas_brat = "Demir" snake case
// NasBrat = "Demir" lower camel case
// nasBrat = "Demir" // uppel camel case
// nasBratDobri = "Demir"

// Napomena. U nazivu promenljive(varijable) se moze naci broj, ali ona ne sme poceti brojem.
// na primer: moze Kanita1 Kanita2, ali ne moze 1Kanita 2Kanita.

amir = "Amir je odlican ucenik druge srednje skole.";
Amir = "Amir je dovoljan ucenik druge srednje skole.";

// JavaScript je case sensitive!!! (Razlikuje velika i mala slova)

console.log(Amir);

// Postoje 4 nacina da deklarisemo promenljivu u JavaScriptu:
// deklaracija-spremanje neke varijable

// 1. Koriscenjem var keyword(odnosno rezervisane reci) - prvenstveno koriscen na ranijim browserima(brauzerima)

// var prijatno = "Prijatno!"; primer istovremenog deklarisanja i inicjalizovanja promenljive pomocu var.
var prijatno; // deklarisanje promenljive
console.log(prijatno); // undefined
console.log(typeof prijatno); //undefined

prijatno = "Prijatno!"; // inicijalizacija deklarisane promenljive prijatno

// 2. Koriscenjem let keyword (rezervisane reci) - prvenstveno koristimo kad je vrednost promenljive(varijable) sklono menjanju.

// let brojGodina = 25 primer istovremenog deklarisanja i inicijalizovanja promenljive pomocu let

let brojGodina; // deklarisanje promenljive
brojGodina = 27; // inicijalzija deklarisane promenljive brojGodina

// 3. Koriscenjem const keyword (rezervisane reci) - koristimo za vrednosti koje se ne menjaju.

// const ime = "Kanita"; primer istovremenog deklarisanja i incijalizovanja promenljive pomocu const.

// Koriscenjem const keyword nije dozvoljeno posebno inicijalizovanje, vec mora uz deklaraciju zajedno.

// 4. Koriscenjem nicega

mervan = "Mervan";

// Napomena.
// Promenljive (varijable) su kontejneri za skladistenje vrednosti.
