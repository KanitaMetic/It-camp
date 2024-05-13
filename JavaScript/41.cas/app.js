// Napraviti dva inputa za brojeve i dugme koje kad se klikne izracuna se njihov zbir i prikaze u p elementu ispod ovih inputa

// const sum = () => {
//   console.log("clicked");
// };

const calculate = (sign) => {
  const a = document.getElementById("num1");
  const b = document.getElementById("num2");
  const result = document.getElementById("result");
  let calculation;
  const sum = +a.value + +b.value;
  //  const sum = Number(a.value) + Number(b.value)
  //   console.log(a.value, typeof b.value);

  switch (sign) {
    case "+":
      calculation = +a.value + +b.value;
      break;
    case "-":
      calculation = +a.value - +b.value;
      break;
    case "*":
      calculation = +a.value * +b.value;
      break;
    case "/":
      calculation = +a.value / +b.value;
      break;
    default:
      calculation = "Not possible";
  }

  result.textContent = sum;
};

// napraviti jos tri dugmeta za oduzimanje deljenje i mnozenje

const dif = () => {
  const c = document.getElementById("num3");
  const d = document.getElementById("num4");
  const result = document.getElementById("result");

  const dif = -c.value - -d.value;
  //  const sum = Number(a.value) + Number(b.value)
  //   console.log(a.value, typeof b.value);

  result.textContent = dif;
};

// umesto da pozivate funkciju direktno u html, napravite event lisenere
const sumButton = document.getElementById("sum");
const difButton = document.getElementById("dif");
const mulButton = document.getElementById("mul");
const divButton = document.getElementById("div");

sumButton.addEventListener("click", (e) => {
  console.log(e);
});
const korisnikovoIme = prompt("Unesite svoje ime");

//  napraviti input elemente i dodati na njega event listener  za change event u callbacku za event listener prikazati na konzoli vrednost inputa
// koji su primitivni a koji kompleksni, sta su callbaekovi i dva zadatka, jedan od zadataka DOM manipulacija
