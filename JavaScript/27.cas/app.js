// 1.toString
// .toString() metoda se koristi da neki broj pretvori u string i vrati isti broj

const a = 10;
console.log(typeof a, a);

const b = a.toString();
console.log(typeof b, b);

// Number()
console.log("10" + 2);

const c = "10";
console.log(typeof c, c);

const d = Number(c);
console.log(typeof c, c);

// .parseInt()
const e = "10";
console.log(typeof e, e);

//praseInt uvek ocekuje argument koji trebamo proslediti unutar metode, u slucaju da se argument ne prosledi, metoda nece raditi
const f = e.parseInt();

// Na ovaj nacin trebamo proslediti argument unutar .parseInt() metode
console.log(typeof f, f);

const PI = "3.14";
console.log(typeof PI, PI);
console.log(parseInt(PI));

// Dodatne metode:
// Number.MAX_VALUE
// Number.MIN_VALUE
