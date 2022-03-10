// ## Section 8:Decorators

// 0 / 16|1시간 17분

// ### 104. Module Introduction

// - Meta-Programming

// - What?
// - Decorator Usage
// - Examples!

// ### 105. A First Class Decorator

// function Logger(constructor: Function) {
//   console.log("Logging...");
//   console.log(constructor);
// }

// @Logger
// class Person {
//   name = "Maph";

//   constructor() {
//     console.log("Creating person object...");
//   }
// }

// const pers = new Person();

// console.log(pers);

// ### 106. Working with Decorator Factories

// function Logger(logString: string) {
//   return function (constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   };
// }

// @Logger("LOGGING - PERSON")
// class Person {
//   name = "Maph";

//   constructor() {
//     console.log("Creating person object...");
//   }
// }

// const pers = new Person();

// console.log(pers);

// ### 107. Building More Useful Decorators

// function Logger(logString: string) {
//   return function (constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   };
// }

// function WithTemplate(template: string, hookId: string) {
//   return function (constructor: any) {
//     const hookEl = document.getElementById(hookId);
//     const p = new constructor();
//     if (hookEl) {
//       hookEl.innerHTML = template;
//       hookEl.querySelector("h1")!.textContent = p.name;
//     }
//   };
// }

// // @Logger("LOGGING - PERSON")
// @WithTemplate("<h1>My Person Object</h1>", "app")
// class Person {
//   name = "Maph";

//   constructor() {
//     console.log("Creating person object...");
//   }
// }

// const pers = new Person();

// console.log(pers);

// ### 108. Adding Multiple Decorators

// Decorator Order
// 1. WithTemplate
// 2. Logger
// (bottom up)

// Decorator Factory Order
// 1. Logger
// 2. WithTemplate
// (top down)

function Logger(logString: string) {
  console.log("LOGGER FACTORY");
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log("TEMPLATE FACTORY");
  return function (constructor: any) {
    console.log("Rendering Template");
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

@Logger("LOGGING - PERSON")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "Maph";

  constructor() {
    console.log("Creating person object...");
  }
}

const pers = new Person();

console.log(pers);
