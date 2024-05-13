// promises
// promises chaining, reject, resolve, then, catch, finally

//create promise

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const rand = Math.random();
    if (rand > 0.5) {
      resolve("Text");
    }
    console.log("we are in reject");
    reject("sdf");
  }, 1000);
});

const promise2 = new Promise((resolve) => {});
console.log(promise);

promise
  .then((result) => {
    console.log(result);
  })
  .catch((reject) => {
    console.log(reject);
  })
  .finally(() => {
    console.log("I happen every time");
  });

// fetchApi/
