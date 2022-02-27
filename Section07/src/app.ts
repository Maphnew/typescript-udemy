// ### 94. Built-in Generics & What are Generics?
// const names: Array<string> = []; // string[]

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (true) {
//       resolve(10);
//     } else {
//       reject(10);
//     }
//   }, 2000);
// });

// promise.then((data) => {
//   console.log(data);
// });

// ### 95. Creating a Generic Function

function merge1(objA: object, objB: object) {
  return Object.assign(objA, objB);
}

const mergedObj1 = merge1({ name: "Max" }, { age: 30 });

console.log(mergedObj1); // {name: 'Max', age: 30}
// console.log(mergedObj1.name); // Property 'name' does not exist on type 'object'.

// Use Generic

function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Max" }, { age: 30 });
const mergedObj2 = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });

console.log(mergedObj); // {name: 'Max', age: 30}
console.log(mergedObj.name); // Max
