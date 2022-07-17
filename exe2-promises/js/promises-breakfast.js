const order = false;

const breakfastPromise = new Promise((resolve, reject) => {
  // This is async task
  setTimeout(() => {
    if (order) {
      resolve('Your order is ready. Come and get it!');
    } else {
      reject(Error('Oh! no there is a problen with your order.'));
    }
  }, 3000);
});

console.log(breakfastPromise);

breakfastPromise
  .then((val) => console.log(val))
  .catch((err) => console.log(err));
