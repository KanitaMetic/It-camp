// Task 1
// Write a function that takes an array and a value and returns all the users with that name from the array.
// If there is no user found return empty array.
// Example of the array is below and examples.

// Example:
// const array1 = [
//   { id: "333222111", name: "Sulejman", age: "22" },
//   { id: "321123432", name: "Stefan", age: "25" },
//   { id: "222312543", name: "Semir", age: "32" },
// ];

// function getObjects(array, value) {
// ...
// }

// console.log(getObjects(array1, "Semir"));
// // result: [ { id: '222312543', name: 'Semir', age: '32' } ]

// console.log(getObjects(array1, "Suad"));
// // result: [ ]

const array2 = [
  { id: "333222111", name: "Sulejman", age: "22" },
  { id: "321123432", name: "Stefan", age: "25" },
  { id: "222312543", name: "Semir", age: "32" },
];

function getObjects(array, value) {
  return array.filter((item) => item.name === value);
}

console.log(getObjects(array2, "Stefan"));

console.log(getObjects(array2, "Suad"));

// DRUGI ZADATAKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
// Task 2
// This is the api you will need to get data from: https://dummyjson.com/products

// The task is to fetch data on page load and show the data on the page in cards that you make.
// The cards need to have at least 4 properties about product

const fetchQuotes = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.log(error);
  }
};

fetchQuotes().then((data) => {
  const contentDiv = document.getElementById("content");

  const quotes = data
    .map((quote) => {
      return `<div class="card">
                  <p class="author">Author: <span id="authorText">${quote.author}</span></p>
                  <p class="content" id="contentText">${quote.content}</p>
                 </div>`;
    })
    .join("");

  contentDiv.innerHTML = quotes;
});

const fetchQuotes3 = async () => {
  try {
    const input = document.getElementById("search");
    const response = await fetch(
      `https://dummyjson.com/products
              ${input.value}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

const showQuotes = (data) => {
  const contentDiv = document.getElementById("content3");

  const quotes = data
    .map((quote) => {
      return `<div class="card">
                    <p class="author">Author: <span id="authorText">${quote.author}</span></p>
                    <p class="content" id="contentText">${quote.content}</p>
                   </div>`;
    })
    .join("");

  contentDiv.innerHTML = quotes;
};

// kraj zadatka

// // es6 + array methods
// reduce, forEach

const arr = [1, 2, 3, 4, 5, 6];
const arr2 = [];

arr.forEach((element, index) => {
  arr2.push({ element: element, index: index });
});

console.log(arr2);

// koristeci foreach consolo logujete sve elementa niza arr

arr.forEach((element) => {
  console.log(element);
});

// koristeci foreach da obiriste sve elemente niza arr

// //ne radi
// arr.forEach((element, index, array) => {
//   console.log(element, index, array);
//   arr.shift();
// });

// arr.forEach((element, index, array) => {
//   console.log(element, index, array);
//   arr.splice(0);
// });

// reduce

const sum = arr.reduce((result, value, index, array) => {
  return result + value;
});

console.log(sum);

// da ubacite sve elemente niza arr u bojekat sa key-om indexom tog elementa

const objFromArr = arr.reduce((result, value, index) => {
  console.log(result, value);

  result[index] = value;
  return result;
}, {});

console.log(objFromArr);

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
  {
    name: "Enver",
    surname: "Kostic",
    age: 45,
    address: "45 Oak St, Townsville",
  },
];

// treba da dobijete imena u nizu svih korisnika koji su stariji od  24

const userArray = mockData.filter((item) => item.age > 24);

const userArray2 = userArray.map((item) => item.name);

const userArray3 = mockData
  .filter((item) => item.age > 24)
  .map((item) => item.name);

console.log(userArray2);

const userArray4 = mockData.reduce((result, value) => {
  if (value.age > 24) {
    result.push(value.name);
  }

  return result;
}, []);

console.log(userArray4);

// naci adresu korsinika koji je iz Townsville

const userAddress = mockData.reduce((result, value) => {
  if (value.address.includes("Townsville")) {
    result = value.address;
  }
  return result;
}, "");

console.log(userAddress);

// naci niz adresa svih korisnika iz Townsville

const userAddresses = mockData.reduce((result, value) => {
  if (value.address.includes("Townsville")) {
    result.push(value.address);
  }
  return result;
}, []);

console.log(userAddresses);
