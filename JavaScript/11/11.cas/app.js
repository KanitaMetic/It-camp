//1.

for (i = 99; i >= -99; i--) {
  if (i % 4 === 0) {
    console.log(i + 14);
  }
}

//2.
zbir = 0;
brBr = 0;
for (i = 3; i < 18; i++) {
  if (i % 3 === 0) {
    zbir += i;
    brBr++;
  }
}

arVrednost = zbir / brBr;
console.log("Aritmeticka vrednost brojeva je " + arVrednost);
