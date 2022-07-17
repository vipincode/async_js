## What is Promise

The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

## Promise have three state

- 1: Pending- is default state of promise, somethim waiting waiting for
- 2 Fullfill- Operation completed successfully
- 3 Rejected- The operation failed.

## Working width promises

### working with promises is three step sequence.

- Create a promise Instance using **Promise** Constructor.
- Define what should happen when the promise is `fullfiled` or `rejected`
- Call one of the method that orivided by promise API. [ Consume the value of a fullfiled promise, or provide a rejection reason for a rejected promise ]

### Promise constructor take one argument a callback with two parameters.

- The bellow function return a promise object that is either `pending` , `resolve` or `rejected`
- resolve when promise is fullfilled
- rejected when is reject
- Both [resolve(), rejected()] of these function provided by constructor.

```
const breakfastPromise = new Promise((resolve, rejected) => {
  _This is async task_
  setTimeout(() => {
  resolve('Your order is ready commin and get it!');
  }, 3000);
});

```

### when this async task completed successfully, it going to return a resolve promise object with some data.

- To get the out of Promise object or consume the promise to do that promise api offers methods you can call on the promise
- The you likely used most `then()` and `catch`
- then call for both `fullfiled` and `rejected` promises

  _Example_
  `breakfastPromise.then((val) => console.log(val)); `

## note

- what ever we passed inside `resolve()` method is available to inside `then()`

### Reject method

```
const order = false;

const breakfastPromise = new Promise((resolve, reject) => {
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

```

### promise.all()

It is usefull when your program needs to wait resolve more than one promise.

### finally

- its called when promise fully settled
- its take a function that's called when promise is setteled.

```
btn.addEventListener('click', (event) => {
  event.target.textContent = 'Loading...';
  getJSON(astrosUrl)
    .then(getProfiles)
    .then(generateHTML)
    .catch((err) => console.log(err))
    .finally(() => event.target.remove());
});
```

### fetch mthod: itself return a promise

once fetch make the request and data finish loading the fetch promise is `fullfiled`

- its also going to return a respone object containing inormaton about the response.
- to access data we nees to parsed data into `JSON` first

```
 btn.addEventListener('click', (event) => {
  event.target.textContent = 'Loading...';
  fetch(astrosUrl)
    .then((response) => response.json())
    .then(getProfiles)
    .then(generateHTML)
    .catch((err) => {
      peopleList.innerHTML = '<h1>Something went wrong!</h1>';
      console.log(err);
    })
    .finally(() => event.target.remove());
});

```
