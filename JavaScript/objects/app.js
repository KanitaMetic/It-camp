// Teme koje treba da obradimo su:
// creating objects, cloning objects,accessing values in objects, adding all types as values  transforming objects into arrays
// cloning objects, transforming objects into arrays

const obj = {}; // pravljenje objekata u JS
const obj1 = new Object(); // pravljenje objekata u JS

const obj2 = {
  key1: "This is a value 1",
  key2: false,
  key3: 12,
  key4: undefined,
  key5: null,
  key6: function name(params) {},
};

//accessing value
console.log(obj2);
console.log(obj2.key1);
console.log(obj2.key2);
console.log(obj2.key3);
console.log(obj2.key4);
console.log(obj2.key5);
console.log(obj2.key6);
// const ab = "";ab

// passing by value, passing by reference
// function sum(a, b) {
//   const a = 20;
//   const b = 30;
//   console.log(a, b);
// }
// const x = 2;
// const y = 3;
// sum(x, y);
// console.log(x, y

// cloning objects
const obj2Clone = { ...obj2 };
console.log(obj2, obj2Clone);
delete obj2Clone.key1;
console.log(obj2, obj2Clone);

// const obj2Clone2 = structuredClone(obj2);
// console.log(obj2, obj
// transforming objects into
