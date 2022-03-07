// ## Section 8:Decorators

// 0 / 16|1시간 17분

// ### 104. Module Introduction

// - Meta-Programming

// - What?
// - Decorator Usage
// - Examples!

// ### 105. A First Class Decorator

function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

@Logger
class Person {
  name = "Maph";

  constructor() {
    console.log("Creating person object...");
  }
}

const pers = new Person();

console.log(pers);
