const x = 0.3;
const y = 0.2;
console.log(x + y);

const x1 = 0.1;
const y1 = 0.2;
console.log(x + y);

//Racunanje realnih brojeva nije uvek tacno u JavaScriptu.

// Infinity (- Infinity) je JavaScript vrednost koja je veca od najveceg broja u JS (koja je manja od najveceg broja), odnosno beskonacnost.

console.log(5 / 0);
console.log(-5 / 0);

// heksidecimalni brojevi u JavaScriptu se interpretiraju sa prefiksom 0x

const br = 0xff;
const br2 = 0xab;
console.log(br);
console.log(br2);

// const white = 0xfff;
// console.log(white);

// const white = #ffffff
// const white (255, 255, 255);

// Brojeve mozemo definisati i preko new keyword:

let z = new Number(0.3);
console.log(z);

// console.log(y + z);
// console.log(y >

const protectEmail = (email) => {
  const _Index = email.indexOf("_");
  const dotIndex = email.indexOf(".");
  const cutStartIndex = _Index === -1 ? dotIndex : _Index;
  const etIndex = email.indexOf("@");
  const cut = email.slice(cutStartIndex, etIndex);
  newEmail = email.replace(cut, "...");
  return newEmail;
};
console.log(protectEmail("demir.miraljemovic@gmail.com"));
