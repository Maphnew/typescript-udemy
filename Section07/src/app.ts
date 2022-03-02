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

// function merge1(objA: object, objB: object) {
//   return Object.assign(objA, objB);
// }

// const mergedObj1 = merge1({ name: "Max" }, { age: 30 });

// console.log(mergedObj1); // {name: 'Max', age: 30}
// // console.log(mergedObj1.name); // Property 'name' does not exist on type 'object'.

// // Use Generic

// function merge<T, U>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// const mergedObj = merge({ name: "Max" }, { age: 30 });
// const mergedObj2 = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });

// console.log(mergedObj); // {name: 'Max', age: 30}
// console.log(mergedObj.name); // Max

// ### 96. Working with Constraints

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// T type can be any object with any structure, but it has to be an object

// const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, 30); // error
const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
console.log(mergedObj); // {name: 'Max', hobbies: ["Sports"], age: 30}

// ### 97. Another Generic Function

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("Hi there!")); // ['Hi there!', 'Got 9 elements.']
console.log(countAndDescribe(["Sports", "Cooking"])); // [Array(2), 'Got 2 elements.']
console.log(countAndDescribe([])); // [Array(0), 'Got no value.']

// ### 98. The "keyof" Constraint

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

extractAndConvert({ name: "Mpahnew" }, "name");
