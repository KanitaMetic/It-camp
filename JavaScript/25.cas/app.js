// U nekoj literaturi cemo naci da je JavaSdcript interpreterski jezik. Medjutim, to nije bas tako u potpunosti.
// Naime, u pozadini JS masina kompajlira skriptu (fajl) pre samog izvrsavanja.

var x;
x = 15;

let y;
y = 10;

const z = 5;

w = 20;
console.log(w);

// Hoisting predstavlja izvlacenje deklaracija na vrhu skripte kako bi se one mogle koristiti.

prom = 5;

var prom;
// console.log(prom);
// let prom;
// const prom
console.log(prom);

// Kasnije deklarisanje neke promenljive je moguce preko var keyword, dok preko let i const nije dozvoljeno.

// Napraviti funkciju koja uzima neki trocifreni broj za argument i vraca zbir cifara tog broja.
//npr za argument 234, rezultat treba biti 9
// pretvaranje broja u string se vrsi preko toString()

// function nasBroj(toString());

const zbirCifara = (broj) => {
  const strBroj = broj.toString();
  let brojac = 0;
  for (let i = 0; i < strBroj.length; i++) {
    brojac += +strBroj[i];
  }
  return brojac;
};

console.log(zbirCifara(53));
console.log(zbirCifara(925));

// Unosi se string A i string Z. Kreirati novi string B koji se dobija tako sto se iz unetog stringa izbacuje svaka pojava znaka Z.
// Npr. za unet string "Madagaskar" i znak "a", dobijamo rezultat "Mdgskr"

// function second(A, Z) {
//   const B = A.replace(Z, "");
//   return B;
// }
// console.log(second("Madagaskar", /a/g))

function index(recenica) {
  const dveReci = "ko osvaja";

  const brojPojavljivanja = recenica.includes(dveReci)
    ? recenica.match(/ko osvaja/g).length
    : 0;
  if (!recenica.includes(dveReci)) {
    return "Nismo pronasli dati string";
  } else if (brojPojavljivanja > 1) {
    return `Pozicija prvog pojavljivanja je: ${recenica.indexOf(dveReci)} \n
    pozicija poslednjeg pojavljivanja je; ${recenica.lastIndexOf(dveReci)}.`;
  } else {
    return `Pozicija  pojavljivanja je: ${recenica.indexOf(dveReci)}`;
  }
}
console.log(index("ko osvaja ligu sampiona ove godine"));
console.log(index("Amir se vratio."));
