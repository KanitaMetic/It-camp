// array methods and es6
// sort,
// some, find findIndex. join, concat, every

// sort

const arr2 = [1, 2, 5, 6, 9, 22, 31, 7];

// const arr2 = arr.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   }
//   if (b > a) {
//     return -1;
//   }
//   return 0;
// });

arr2.sort((a, b) => a - b);
console.log(arr2);

const mockData = [
  {
    name: "John",
    surname: "Doe",
    age: 25,
    address: "123 Main St, Cityville",
  },
  {
    name: "Enver",
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

mockData.sort((a, b) => a.age - b.age);

mockData.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  }
  if (b.name > a.name) {
    return -1;
  }
  return 0;
});
console.log(mockData);

const arr1 = [1, 69, 3, 42, 5, 777, "a", "b", "1a"];

// arr1.sort();

// console.log(arr1);

const arr32 = arr1
  .filter((item) => {
    if (typeof item === "string") {
      return false;
    }
  })
  .sort();
console.log(arr1);

// aray.join string.split

const str = "Ovo je neki string";

const arr5 = str.split(" ");

const str2 = arr5.join("");
console.log(arr5);

// napravite funkciju koja uzima neku recenicu i pravi od nje kebab case
function makeKebabCase(string) {
  const arr6 = string.split(" ");
  return arr6.join("-");
}

console.log(makeKebabCase("Hocu da ovo bude kebab case."));

const arr7 = [1, 2, 3, 4, 5, 6];

const found = arr7.find((value) => {
  if (value === 3) return true;
});

// console.log(found);

// const found2 = arr6.findIndex((value) => {
//   if (value === 3) return true;
// });

// console.log(found2);

// nadjite objekat u kome je ime jednako enver

const found1 = mockData.find((item) => {
  if (item.name === "Enver") return true;
});
console.log(found1);

//nadji index objekta cije je prezime smith

const found2 = mockData.findIndex((item) => {
  if (item.surname === "Smith") return true;
});
console.log(found2);

// every, some

const arr9 = [1, 3, 5, 7, 9, 2];

const check = arr9.every((value) => {
  if (value % 2 === 0) {
    return false;
  }
  return true;
});

console.log(check);

const check2 = arr9.some((value) => {
  if (value % 2 === 0) {
    return true;
  }

  return false;
});

console.log(check2);

const arr10 = ["1", 2, 3, 5, "6"];

// proverite da li niz arr10 ima bar jedan element koji je string

const check3 = arr10.some((value) => {
  if (typeof value === "string") {
    return true;
  }

  return false;
});
console.log(check3);
const check4 = arr10.every((value) => {
  if (typeof value === "number") {
    return true;
  }

  return false;
});
console.log(check4);

// proveriti da li bar jedan korisnik iz mockdata je stariji od 44 god

const check5 = mockData.some((value) => {
  if (value.age > 40);
  return true;

  return false;
});
console.log(check5);
