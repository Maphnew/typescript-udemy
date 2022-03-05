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

// ### 99. Generic Classes

// class DataStorage<T extends string | number | boolean> {
//   private data: T[] = [];

//   addItem(item: T) {
//     this.data.push(item);
//   }

//   removeItem(item: T) {
//     if (this.data.indexOf(item) === -1) {
//       return;
//     }
//     this.data.splice(this.data.indexOf(item), 1);
//   }

//   getItems() {
//     return [...this.data];
//   }
// }

// const textStorage = new DataStorage<string>();
// textStorage.addItem("Maph");
// textStorage.addItem("Nat");
// textStorage.removeItem("Maph");
// console.log(textStorage.getItems());

// const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const maphObj = { name: "Maph" };
// objStorage.addItem(maphObj);
// objStorage.addItem({ name: "Nat" });
// // ...
// objStorage.removeItem(maphObj);
// console.log(objStorage.getItems());

// ### 101. Generic Utility Types

// Partial, Readonly type

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(title:string, description: string, date: Date): CourseGoal{
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Maph', 'Anna'];
// names.push('Nat'); // error
// names.pop(); // error

// ### 102. Generic Types vs Union Types

// Mixed data vs

class DataStorage {
  private data: (string | number | boolean)[] = [];

  addItem(item: (string | number | boolean)) {
    this.data.push(item);
  }

  removeItem(item: (string | number | boolean)) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage();
textStorage.addItem("Maph");
textStorage.addItem("Nat");
textStorage.removeItem("Maph");
console.log(textStorage.getItems());

const numberStorage = new DataStorage();