const breakfastPromise = new Promise((resolve, rejected) => {
  // This is async task
  setTimeout(() => {
    resolve('Your order is ready commin and get it!');
  }, 3000);
});

console.log(breakfastPromise);

breakfastPromise.then((val) => console.log(val));
