// OPERATORI U JavaScriptu //

// Postoji 6 razlicitih vrsta operatora u JavaScriptu:

//1. Aritmeticki operatori (Arithmetic operators);
//2. Operatori dodele vrednosti ili (Assignment operators);
//3. String operatori;
//4. Operatori poredjenja (Comparison operators);
//5. Logicki operatori (Logical operators);
//6. Tipovni operatori (Type operators).

// 1.1. Sabiranje(+):
console.log(5 + 5);

//1.2. Oduzimanje (-):
console.log(7 - 3);

//1.3.  Mnozenje/Multiplication(*):
console.log(7 * 3);

//1.4. Deljenje/Division(/):
console.log(15 / 3);

//1.5. Na stepen/Exponentation(**):
console.log(2 ** 3);

//1.6 Ostatak pri deljenju/Modul (%):
console.log(12 % 5);

// Da bi broj bio paran mora ostatak pri deljenju sa 2 biti nula.
// broj % 2 mora biti 0.

// Da bi broj bio neparan mora ostatak pri deljenju sa 2 biti razlicit od nule.
// broj % 2 mora biti razlicit od 0.

//1.7 /Increment (++): povecala se vrednost za 1
let a = 13;
a++;
console.log(a);

//1.8 Decrement (--); smanjila se vrednost za 1
let b = 13;
b--;
console.log(b);

//2. Operatori dodele vrednosti (Assignment operators)

// 2.1. = - jednako
x = 34;
console.log(x);

// 2.2. += - plus jednako
x += 6; // isto kao da smo napisali x = x + 6
console.log(x);

// 2.3. -=
x -= 5; // x = x - 5
console.log(x);

// 2.4. *=
x *= 2;
console.log(x);
//2.5. *=
x /= 7;
console.log(x);

// 2.6.
x %= 4;
console.log(x);

// 2.7.
x **= 4;
console.log(x);

// 3.  String operatori
//  + operator moze biti koriscen za spajanje stringova.

ime = "Demir";
prezime = "Miraljemovic";
imeIprezime = ime + prezime;
console.log(imeIprezime);

ime = "Demir";
prezime = "Miraljemovic";
imeIprezime = ime + " " + prezime;
console.log(imeIprezime);

brojGodina = 18;
console.log(ime + brojGodina);
console.log(typeof (ime + brojGodina));

//Pomocu + operatora mozemo dodavati broj stringu i obratno, rezultat je string.

console.log(typeof ("55" + 44));
// Ako string moze da se pretvori u broj JavaScript ce izvrsiti to pretvaranje, pa tek onda oduzimanje ili bilo koju drugu arimeticku opearicju osim sabiranja.
console.log(typeof ("55" - 44));
console.log("55a" - 44); // NaN - Not a Number predstavlja nekorektan broj i njegov tip je number.
console.log(typeof ("55a" - 44));
console.log(5 * "3");

console.log("55a" / 5);

//4. Operatori poredjenja (Compaarison operators);
// 4.1. == (poredjenje vrednosti)
console.log(4 == 7); // false
console.log(5 == 5); // true
console.log(5 == "5"); // true

// 4.2. === Poredjenje tipa i vrednosti
console.log(5 === "5"); // false
console.log(5 === 5); //true

// 4.3. != Razlicita vrednost
console.log(5 != 5); // false jer su isti
console.log(5 != "5"); // false

// 4.4. !== Razlicita vrednost ili razlicit tip
console.log(5 !== 5); // false jer su isti
console.log(5 !== "5"); // true

// 4.5. > vece od
console.log(4 > 5);

// 4.6. < manje od
console.log(4 < 5);

// 4.7. > vece ili =
console.log(4 >= 5);

// 4.8. < manje ili =
console.log(4 <= 5);

// 4.9. ? Ternary operator
trenutnoVreme = 21;
pozdrav = trenutnoVreme < 4 ? "Dobar dan" : "Dobro vece";
console.log(pozdrav);

// 5.Logicki operatori (Logical operators);

// 5.1. && logicko and (i);
prviBroj = 2;
drugiBroj = 3;
// Ispitati da li su oba broja pozitivna.
console.log(prviBroj > 0 && drugiBroj > 0);

// 5.2. || logicko ili (or)
// Ispitati da li je bar jedan od ponudjenih brojeva paran broj.
prviBroj = 2;
drugiBroj = 3;
console.log(prviBroj % 2 === 0 || drugiBroj % 2 === 0);

//5.3. ! logicko not
console.log(!(prviBroj % 2 === 0));

// 6. Tipovni operatori (Type oprators)

// 6.1. typeof
console.log(typeof 14.17);

//6.2. instantceof
console.log([1, 2, 3] instanceof Array);

const brojGodina3 = "Unesite broj godina";
if (brojGodina3) {
  console.log("Niste uneli broj godina");
} else if (3 < 0) {
  console.log("Broj godina ne moze biti negativan");
} else if (3 < 12) {
  console.log("Vi ste decijeg doba");
} else if (3 >= 12 && 3 < 18) {
  console.log("Vi ste maloletni");
} else if (3 >= 18 && 3 < 40) {
  console.log("Vi ste punoletni");
} else if (3 >= 40) {
  console.log("Vi ste zrela osoba");
}
