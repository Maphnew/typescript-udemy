const names: Array<string> = []; // string[]

const promise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) {
      resolve(10);
    } else {
      reject(10);
    }
  }, 2000);
});

promise.then((data) => {
  console.log(data);
});
