// array functions, es6
// map, filter

// ES6 or ECMAscript
// let, const, arow function, array metods:map, filter, reduce..

const arr = [1, 2, 3, 4, 5, 6];

const arr2 = arr.map((value, index, array) => {
  console.log(value, index, array);
  return `This is number ${value}, with index ${index}`;
});

console.log(arr2);

// da napravite novi array sa elementima arraya arr: arr element * 2

const arr3 = [1, 2, 3, 4, 5, 6];

const arr4 = arr.map((value, index, array) => {
  console.log(value, index, array);
  return value * 2;
});

console.log(arr4);

// da napravite novi niz koji iz niza arr, sklanja svaki paran broj i menja ga sa undefinad

const arr5 = [1, 2, 3, 4, 5, 6];

const arr6 = arr.map((value) => {
  if (value % 2 == 0) {
    return undefined;
  } else {
    return value;
  }
});

// novi niz koji ima kvadrat svakog neparnog broja iz niza arr
// const arr8 = arr.map((value) => {
//   if (value % 2 !== 0) {
//     return value * value;
//   } else {
//     return value;
//   }
// });

// // napraviti novi niz koji sve stringove iz niza arr6 pretvara u uppercase

// const arr9 = arr6.map((value) => value.toUpperCase());
// console.log(arr5);

const arr8 = arr.filter((value) => {
  if (value % 2 == 0) {
    return true;
  }
  return false;

  // return value % 2 === 0 - vraca neparne brojeve
});

console.log(arr8);

//

const arr9 = "this is an array created fro a string".split("");

const arr10 = arr9.filter((value) => {
  return !value.includes("a");
});
console.log(arr10);

// napravite niz samo imena

const mockData = [
  {
    name: "John",
    surname: "Doe",
    age: 25,
    address: "123 Main St, Cityville",
  },
  {
    name: "Alice",
    surname: "Smith",
    age: 30,
    address: "456 Oak St, Townsville",
  },
  {
    name: "Bob",
    surname: "Johnson",
    age: 22,
    address: "789 Pine St, Villagetown",
  },
  {
    name: "Eva",
    surname: "Brown",
    age: 28,
    address: "101 Elm St, Hamletsville",
  },
];

const olderThan24 = mockData.filter((value) => {
  return value.age > 24;
});

// const names = mockData.filter((value) => {
//   return value.includes("a e i o u");
// });
// console.log(names);

const newArray = mockData.filter((value) => {
  switch (value.name[0].toLowerCase) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
    default:
      return false;
  }
});

console.log(newArray);

// napraviti search functionality gde na osnovu variable search filtriramo array po imenu.

const search = "E";
