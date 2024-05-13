// function initiaalization, hoisting, arrow function, callbacks
// closure

// function testFn(params) {} // hoistovanje, svaka funkcija definisana ovako se hoista u potpunosti

// const testFn2 = () => true;

// const a = 10;
// var b = 20;

// calback

// const sum = (a, b) => a + b;

// const sum = (a, b) => a + b;
// const div = (a, b) => a - b;
// const prod = (a, b) => a * b;
// const dif = (a, b) => a % b;
// const executeFnOnArray = (arr, fn) => {
//   let result = initValue;

//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     result = fn(results, element);
//   }

//   return results;
// };
// console.log(executeFnOnArray(arr1, 0, sum));
// console.log(executeFnOnArray(arr1, 0, div));
// console.log(executeFnOnArray(arr1, 1, pro));
// console.log(executeFnOnArray(arr1, 1, dif));

// const printThanks = (text) => {
//   console.log(text);
//   console.log("Thank you for using my services. Kanita");
// };

// // Napraviti funkciju koja ceo string pretvara u velika slova
// // takodje prima i drugi prop funkciju iznad printThanks koja poziva sa rezultatom

// const makeUpperCase = (text, fn) => {
//   const result = text.toUpperCase();
//   fn(result);
// };

// makeUpperCase("Ovo je bas lep dan", printThanks);

// const toUpperCase = (text) => text.toUpperCase();

// const executeStringCommand = (text, command) => {
//   const results = command(text);
//   console.log(results);
// };

executeStringCommand("Ovo je moj text", toUpperCase);

const executeStringCommand1 = (text, command) => {
  const results = command(text);
  console.log(results);
};

executeStringCommand("Ja sam ovo napravila", toUpperCase);

const toLowerCase = (text) => text.toLowerCase();
const replaceAllSpaceQHs = (text) => text.replace();
// const addYtoEveryWord = (text) =>
