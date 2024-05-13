// Promenljive definisane preko var keyword mozemo ponovo deklarisati, odnosno (izvrsiti redeklaraciju), kao i reinicijalizaciju(odnosno, novo dodeljivanje vrednosti).

var x = 10;
console.log(x);

x = 14;
console.log(x);

x = 15;
console.log(x);

// let i const keywords(rezervisane reci u JavaScriptu) nam obezbedjuju Block Stope.

// Promenljive definisane preko let keywords mozemo ponovo deklarisati (izvrsiti redeklaraciju) ako se radi o drugom prostoru, kao i reinicijalizaciju (novo dodeljivanje vrednosti) mozemo izvrsiti i u istom prostoru.
// Reinicijalizacija nije dozvoljena za promenljive definisane preko const.
let y = 3;
console.log(y);

y = 6;
console.log(y);
// let y = 50; Nije dozvoljeno redeklarisanje u istom prostoru.

{
  // console.log(y); y se prepoznaje iz global scope
  let y = 20;
  console.log(y);
}
console.log(y);

// Promenljive definisane preko const keyword mozemo ponovo deklarisati (izvrsiti redeklaraciju), kao i reinicijalizaciju(novo dodeljivanje vrednosti) ako se radi o drugom prostoru.

const z = 30;

// const z = 45; nije dozvoljeno redeklarisanje u istom prostoru.
// z = 60; nije dozvoljena reinicijalizacija u istom prostoru

{
  // console.log(z); se prepoznaje iz global scope
  const z = 20;
  console.log(z);
}
console.log(z);
