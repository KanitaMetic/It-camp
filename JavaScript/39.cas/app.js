// async await es6
// es6 je nova verzija JS koja je donela mnogo promena, klasu const itd, i donela je novu sintaksu promise

//try catch, http
//async
const asyncFN = async () => {
  const rand = Math.random();

  if (rand > 0.5) {
    console.log("we are in reject");
    return "resolve";
  } else {
    console.log("we are in reject");
    throw new Error("This is error text");
  }
};

asyncFN()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error.message);
  });

// razlika izmedju async i awaita i promise jeste zbog

const fetchUser = async () => {
  fetch("https://randomuser.me/api/");
};

fetchUser();

// http
// http je protokol, za slanje hyper teksta, a html je jezik koji pravi hyper tekst, a hyper tekst su sve stranice
// protokol je jezik kojim dva kompjutera komuniciraju (jezici su udp i tpc, sve ide preko toga)
// iso model
// sta je udp i tpc
// evolucija o http

// http, internet, iso model, tpc and udp

// http
// http se koristi kao protokol za sve podatke koji funkcionisu na internetu
//ceo cas mu prodje na ovo

// GET, POST, PUT, DELETE
// GET SE KORISTI ZA UZIMANJE PODATAKA, NEMA BODY, PODATKE SALJETE U URLU
// POST SE KORISTI ZA SLANJE PODATAKA, IMA BODY, PODATKE SALJETE U BODIJU
// PUT SE KORISTI ZA SLANJE PODATAKA, IMA BODY, PODATKE SALJETE U BODIJU
// DELETE SE KORISTI ZA BRISANJE PODATAKA

// HTTP STATUS CODES - STATUS KODOVI
// 100-190 INFORMACIONI KODOVI(DA SE NESTO DESILO)
// 200-290 SUCCESS KODOVI(DA JE VAS HTTP USPEO, I PROSLO KAKO TREBA)
// 300-390 REDIRECT KODOVI (KORISTI SE KADA ODETE NA JEDNU ADRESU, A ONA VAS POSALJE NA DRUGU ADRESU)
// 400-490 CLIENT ERROR(TO SU GRESKE KOJE SU SE DESILE)
// 500 SERVER ERRORS (TO ZNACI DA  SERVER TRENUTNO NE RADI )
// DOM, BOM
