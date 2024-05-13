//Task 1
//Write a function that takes an array and a value and returns all the users with that name from the array.
//If there is no user found return empty array.
//Example of the array is below and examples.

// Example:
const array1 = [
  { id: "333222111", name: "Sulejman", age: "22" },
  { id: "321123432", name: "Stefan", age: "25" },
  { id: "222312543", name: "Semir", age: "32" },
];
const array2 = [
  { id: "333222111", name: "Sulejman", age: "22" },
  { id: "321123432", name: "Stefan", age: "25" },
  { id: "222312543", name: "Semir", age: "32" },
];
function getObjects(array, value) {
  return array.filter((item) => item.name === value);
}

console.log(getObjects(array1, "Semir"));
result: [{ id: "222312543", name: "Semir", age: "32" }];

console.log(getObjects(array1, "Suad"));
result: [{ id: "" }];

console.log(getObjects(array1, "Suad"));
console.log(getObjects(array1, "Semir"));

//Task 2
//This is the api you will need to get data from: https://dummyjson.com/products

//The task is to fetch data on page load and show the data on the page in cards that you make.
//The cards need to have at least 4 properties about product
const fetchQuotes3 = async () => {
  try {
    const response = await fetch(`https://dummyjson.com/products`);
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.log(error);
  }
};

const showQuotes = (data) => {
  const contentDiv = document.getElementById("content");

  const quotes = data
    .map((quote) => {
      return `<div class="card">
                  <p class="author">Author: <span id="authorText">${quote.author}</span></p>
                  <p class="contenct" id="contentText">${quote.content}</p>
                 </div>`;
    })
    .join("");

  contentDiv.innerHTML = quotes;
  console.log(data);
};
fetchQuotes3().then(showQuotes);
