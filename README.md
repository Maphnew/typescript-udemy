# typescript-udemy

## Section 1:Getting Started

0 / 9|41분

### 1. Welcome to the Course!

2분

### 2. What Is TypeScript & Why Should You Use It?

5분

- A JS Superset!
- Building up in JS
- New Features
- Advantages to JS
- Browser CANNOT execute it!
- Should compiled to JS

### 3. Join Our Learning Community

1분

### 4. Installing & Using TypeScript

13분

- Install typescript

```
npm i -g typescript
```

- Build to JS

```
tsc using-ts.ts
```

### 5. TypeScript Advantages - Overview

3분

- Types
- Next-gen JS Features (compiled down for older Browsers)
- Non-JS Features like Interfaces or Generics
- Meta-Programming Features like Decorators
- Rich Configuration Options
- Modern Tooling that helps even in non-TS Projects

### 6. Course Outline

4분

- Getting Started
- Compiler & Configuration Deep Dive
- Working with Next-gen JS Code
- Classes & Interfaces
- Advanced Types & TypeScript Features
- Generics
- Decorators
- Time to Practice - Full Project
- Working with Namespaces & Modules
- Webpack & TypeScript
- Third-Party Libraries & TypeScript
- React + TypeScript & NodeJS + TypeScript

### 7. How To Get The Most Out Of The Course

3분

### 8. Setting Up A Code Editor / IDE

3분

### 9. The Course Project Setup

7분

- npm init, install lite-server

## Section 2:TypeScript Basics & Basic Types

0 / 26|1시간 41분

### 10. Module Introduction

1분

- Working with Types
- Core Syntax & Features

### 11. Using Types

10분

- Core Types

```
number
string
boolean
```

```TS
const add = (num1: number, num2: number):number => {
    return num1 + num2
}

const result = add(1, 5);
console.log(result)
```

### 12. TypeScript Types vs JavaScript Types

5분

- JS uses "dynamic types" (resolved at runtime)
- TS uses "static types" (set during development)

### 13. Important: Type Casing

1분

### 14. Working with Numbers, Strings & Booleans

6분

```TS
const add = (num1: number, num2: number, showResult: boolean, phrase: string):number => {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    } else {
        return result;
    }

}

const n1 = 5;
const n2 = 2.6;
const printResult = true;
const resultPhrase = 'Result is: ';

add(n1, n2, printResult, resultPhrase);
```

### 15. Type Assignment & Type Inference

6분

```TS
let n1: number = 5; // NO
```

```TS
let n1: number;
n1 = 5;
```

### 퀴즈 1: Understanding Types

### 16. Object Types

8분

```TS
const person1: {
    name: string;
    age: number;
} = {
    name: 'MPHNW',
    age:30
};

// THIS IS BETTER
const person2 = {
    name: 'MPHNW',
    age:30
};

console.log(person1.name);
console.log(person2.name);

// ! NOT LIKE THIS
const person3: object = {
    name: 'MPHNW',
    age:30
};
// OR THIS
const person4: {} = {
    name: 'MPHNW',
    age:30
};
```

### 17. Nested Objects & Types

1분

### 18. Arrays Types

5분

```TS
const person1: {
    name: string;
    age: number;
    hobbies: string[];
} = {
    name: 'MPHNW',
    age:30,
    hobbies: ['Sports', 'Cooking']
};

const person2 = {
    name: 'MPHNW',
    age:30,
    hobbies: ['Sports', 'Cooking']
};

console.log(person1.name);
console.log(person2.name);

for(const hobby of person1.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()) // error
}

// Mixed
let favoriteAcitivities: any[];
favoriteAcitivities = ['A', 1]
```

### 19. Working with Tuples

6분

- Fixed Length Array

```TS
const person2: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: 'MPHNW',
    age:30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};

person2.role.push('admin'); // EXCEPTION for TUPLE
// person2.role[1] = 10; // ERROR
// person2.role = [0, 'role', 'something'] // ERROR
```

### 20. Working with Enums

7분

- Automatically enumerated global constant identifiers

```TS
enum {NEW, OLD}
```

```TS
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR =2;

enum Role { ADMIN = 5, READ_ONLY = 100, AUTHOR = 'AUTHOR' };

const person3 = {
    name: 'MPHNW',
    age:30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

if( person3.role === Role.ADMIN ) {
    console.log('is admin')
}
```

### 21. The "any" Type

2분

- -

```TS
let favoriteAcitivities: any[];
favoriteAcitivities = ['A', 1]
```

### 22. Union Types

7분

- pipeline

```TS
const combine = (input1: number | string, input2: number | string) => {
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine('Max', 'Min')
console.log(combinedNames);
```

### 23. Literal Types

8분

```TS
const combine = (
    input1: number | string,
    input2: number | string,
    resultConversion: 'as-number' | 'as-text'
) => {
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Max', 'Min', 'as-text')
console.log(combinedNames);
```

### 24. Type Aliases / Custom Types

3분

```TS
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

const combine = (
    input1: Combinable,
    input2: Combinable,
    resultConversion: ConversionDescriptor
) => {
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
```

### 25. Type Aliases & Object Types

1분

- Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.

```TS
// This allows you to avoid unnecessary repetition and manage types centrally.
type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 }; // this works!
```

```TS
// For example, you can simplify this code:
function greet(user: { name: string; age: number }) {
  console.log('Hi, I am ' + user.name);
}

function isOlder(user: { name: string; age: number }, checkAge: number) {
  return checkAge > user.age;
}

// To
type User = { name: string; age: number };

function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}

function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}

```

### 퀴즈 2: Core Types & Concepts

### 26. Function Return Types & "void"

7분

```TS
function add(n1: number, n2: number): number {
    return n1 + n2;
};

function printResult(num: number): void {
    console.log( 'Result: ', num );
}

printResult(add(5,12));
```

### 27. Functions as Types

6분

```TS
function add(n1: number, n2: number): number {
    return n1 + n2;
};

function printResult(num: number): void {
    console.log( 'Result: ', num );
}

printResult(add(5,12));

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult; // ERROR
// combineValues = 5; // ERROR

console.log(combineValues(1,2));
```

### 28. Function Types & Callbacks

4분

```TS
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

addAndHandle(10, 20, (result) => {
    console.log(result);
});

```

### 퀴즈 3: Functions & Types

1. Will this code compile?

```TS
function sendRequest(data: string, cb: (response: any) => void) {
  // ... sending a request with "data"
  return cb({data: 'Hi there!'});
}

sendRequest('Send this!', (response) => {
  console.log(response);
  return true;
 });
```

### 29. The "unknown" Type

4분

```TS
let userInput: unknown; // VS any
let userName: string;

userInput = 5;
userInput = 'MAX';
// userName = userInput; // ERROR

if (typeof userInput === 'string') {
    userName = userInput;
}
```

### 30. The "never" Type

4분

```TS
// "never"
function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
}

generateError('An error occured', 500)
```

### 31. Wrap Up

2분

- Object
- Nested Objects
- Array
- Tuple
- Enum
- any
- Union
- Literal
- Aliase / Custom
- Function as Types
- Funtion Types & Callbacks
- unkown
- never

### 32. Useful Resources & Links

1분

https://www.typescriptlang.org/docs/handbook/basic-types.html

## Section 3:The TypeScript Compiler (and its Configuration)

0 / 15|55분

### 33. Module Introduction

1분

### 34. Using "Watch Mode"

2분

```shell
tsc app.ts -w
```

### 35. Compiling the Entire Project / Multiple Files

4분

```shell
tsc --init
```

- tsconfig.json

- Compile all file

```shell
tsc
```

- Watch mode (-w, --watch)

```shell
tsc -w
```

### 36. Including & Excluding Files

6분

- tsconfig.json

```json
  ... },
  "exclude": [
    // "analytics.ts"
    // "**/*.dev.ts"
    "node_modules" // would be the default
  ],
//   "include": [
//     "app.ts",
//     "analytics.ts"
//   ],
  "files": [
    "app.ts"
  ]
}
```

### 37. Setting a Compilation Target

4분

```json
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig.json to read more about this file */

    /* Basic Options */
    "target": "es5",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
    "module": "commonjs",
    ...
```

### 38. Understanding TypeScript Core Libs

6분

```json
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig.json to read more about this file */

    /* Basic Options */
    // "incremental": true,                   /* Enable incremental compilation */
    "target": "es6",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
    "module": "commonjs",                     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
    "lib": [
      "DOM",
      "ES6",
      "DOM.Iterable",
      "ScriptHost"
    ],
    ...
```

### 39. More Configuration & Compilation Options

2분

### 40. Working with Source Maps

2분

### 41. rootDir and outDir

6분

```json
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig.json to read more about this file */

    /* Basic Options */
    // "incremental": true,                   /* Enable incremental compilation */
    "target": "es6",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
    "module": "commonjs",                     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
    "lib": [
      "DOM",
      "ES6",
      "DOM.Iterable",
      "ScriptHost"
    ],                             /* Specify library files to be included in the compilation. */
    // "allowJs": true,                       /* Allow javascript files to be compiled. */
    // "checkJs": true,                       /* Report errors in .js files. */
    // "jsx": "preserve",                     /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */
    // "declaration": true,                   /* Generates corresponding '.d.ts' file. */
    // "declarationMap": true,                /* Generates a sourcemap for each corresponding '.d.ts' file. */
    // "sourceMap": true,                     /* Generates corresponding '.map' file. */
    // "outFile": "./",                       /* Concatenate and emit output to single file. */
    "outDir": "./dist",
    "rootDir": "./src",
    "removeComments": true,
```

### 42. Stop Emitting Files on Compilation Errors

3분

```json
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig.json to read more about this file */

    /* Basic Options */
    // "incremental": true,                   /* Enable incremental compilation */
    "target": "es6",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
    "module": "commonjs",                     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
    "lib": [
      "DOM",
      "ES6",
      "DOM.Iterable",
      "ScriptHost"
    ],

    // ...

    "noEmitOnError": true,
```

### 43. Strict Compilation

11분

```json
 /* Strict Type-Checking Options */
    "strict": true,                           /* Enable all strict type-checking options. */
    // "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */
    // "strictNullChecks": true,              /* Enable strict null checks. */
    // "strictFunctionTypes": true,           /* Enable strict checking of function types. */
    // "strictBindCallApply": true,           /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
    // "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */
    // "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type. */
    // "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. */

```

### 44. Code Quality Options

4분

```json
/* Additional Checks */
    // "noUnusedLocals": true,                /* Report errors on unused locals. */
    // "noUnusedParameters": true,            /* Report errors on unused parameters. */
    // "noImplicitReturns": true,             /* Report error when not all code paths in function return a value. */
    // "noFallthroughCasesInSwitch": true,    /* Report errors for fallthrough cases in switch statement. */
    // "noUncheckedIndexedAccess": true,      /* Include 'undefined' in index signature results */
```

### 45. Debugging with Visual Studio Code

4분

- Debugger for Chrome

```json
// launch.json

{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Launch Chrome against localhost",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceFolder}"
    }
  ]
}
```

### 46. Wrap Up

1분

### 47. Useful Resources & Links

1분

Attached you find all the code snapshots for this module - you also find them attached to individual lectures throughout this module.

These links might also be interesting:

- tsconfig Docs: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

- Compiler Config Docs: https://www.typescriptlang.org/docs/handbook/compiler-options.html

- VS Code TS Debugging: https://code.visualstudio.com/docs/typescript/typescript-debugging

## Section 4:Next-generation JavaScript & TypeScript

0 / 9|32분

### 48. Module Introduction

2분

### 49. "let" and "const"

7분

### 50. Arrow Functions

5분

### 51. Default Function Parameters

2분

### 52. The Spread Operator (...)

5분

### 53. Rest Parameters

5분

### 54. Array & Object Destructuring

5분

### 55. How Code Gets Compiled & Wrap Up

2분

### 56. Useful Resources & Links

1분

## Section 5:Classes & Interfaces

0 / 28|1시간 36분

### 57. Module Introduction

1분

#### Module Content

1. What & Why?
2. Classes & Inheritance
3. Interfaces

### 58. What are Classes?

5분

#### What's Object-oriented Programming(OOP)?

- Work with (real-life) Entities in yout code

#### Classes & Instances

- Classes: Blueprints of objects
- Object: Instances of classes (=based on classes)

### 59. Creating a First Class

6분

```ts
class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
}

const accounting = new Department("Accounting");

console.log(accounting);
```

```js
Department {name: 'Accounting'}
```

### 60. Compiling to JavaScript

3분

- Compare es6 vs es5

```json
// tsconfig.json
// ES6
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "lib": [
      "dom",
      "es6",
      "dom.iterable",
      "scripthost"
    ],
```

```js
// app.js
// ES6
"use strict";
class Department {
  constructor(n) {
    this.name = n;
  }
}
const accounting = new Department("Accounting");
console.log(accounting);
//# sourceMappingURL=app.js.map
```

```json
// tsconfig.json
// ES5
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    // "lib": [
    //   "dom",
    //   "es6",
    //   "dom.iterable",
    //   "scripthost"
    // ],
```

```js
// app.js
// ES5
"use strict";
var Department = (function () {
  function Department(n) {
    this.name = n;
  }
  return Department;
})();
var accounting = new Department("Accounting");
console.log(accounting);
//# sourceMappingURL=app.js.map
```

### 61. Constructor Functions & The "this" Keyword

8분

```ts
class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log("Department:", this.name);
  }
}

const accounting = new Department("Accounting");

accounting.describe();

const accountingCopy = { name: "s", describe: accounting.describe };

accountingCopy.describe();
```

### 62. "private" and "public" Access Modifiers

6분

```ts
class Department {
  name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log("Department:", this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("Accounting");

accounting.addEmployee("MAX");
accounting.addEmployee("Maphnew");

accounting.employees[3] = "Anna"; // <---- ERROR

accounting.describe();
accounting.printEmployeeInformation();
```

```
src/app.ts:28:12 - error TS2341: Property 'employees' is private and only accessible within class 'Department'.
```

### 63. Shorthand Initialization

3분

### 64. "readonly" Properties

3분

### 퀴즈 4: Class Basics

### 65. Inheritance

8분

### 66. Overriding Properties & The "protected" Modifier

3분

### 67. Getters & Setters

7분

### 68. Static Methods & Properties

5분

### 69. Abstract Classes

5분

### 70. Singletons & Private Constructors

5분

### 71. Classes - A Summary

2분

### 퀴즈 5: Classes

### 72. A First Interface

4분

### 73. Using Interfaces with Classes

6분

### 74. Why Interfaces?

2분

### 75. Readonly Interface Properties

2분

### 76. Extending Interfaces

3분

### 77. Interfaces as Function Types

3분

### 78. Optional Parameters & Properties

4분

### 79. Compiling Interfaces to JavaScript

2분

### 퀴즈 6: Interfaces

### 80. Wrap Up

2분

### 81. Useful Resources & Links

1분

## Section 6:Advanced Types

0 / 12|52분

### 82. Module Introduction

1분

### 83. Inter## Section Types

5분

### 84. More on Type Guards

11분

### 85. Discriminated Unions

6분

### 86. Type Casting

8분

### 87. Index Properties

7분

### 88. Function Overloads

6분

### 89. Optional Chaining

4분

### 90. Nullish Coalescing

3분

### 퀴즈 7: Advanced Types

### 91. Wrap Up

1분

### 92. Useful Resources & Links

1분

## Section 7:Generics

0 / 12|52분

### 93. Module Introduction

1분

### 94. Built-in Generics & What are Generics?

9분

### 95. Creating a Generic Function

9분

### 96. Working with Constraints

4분

### 97. Another Generic Function

6분

### 98. The "keyof" Constraint

3분

### 99. Generic Classes

9분

### 100. A First Summary

1분

### 101. Generic Utility Types

7분

### 102. Generic Types vs Union Types

4분

### 퀴즈 8: Generics

### 103. Useful Resources & Links

1분

## Section 8:Decorators

0 / 16|1시간 17분

### 104. Module Introduction

2분

### 105. A First Class Decorator

5분

### 106. Working with Decorator Factories

2분

### 107. Building More Useful Decorators

6분

### 108. Adding Multiple Decorators

3분

### 109. Diving into Property Decorators

5분

### 110. Accessor & Parameter Decorators

6분

### 111. When Do Decorators Execute?

3분

### 112. Returning (and changing) a Class in a Class Decorator

9분

### 113. Other Decorator Return Types

4분

### 114. Example: Creating an "Autobind" Decorator

9분

### 115. Validation with Decorators - First Steps

7분

### 116. Validation with Decorators - Finished

12분

### 117. Fixing a Validator Bug

1분

### 118. Wrap Up

3분

### 119. Useful Resources & Links

1분

## Section 9:Practice Time! Let's build a Drag & Drop Project

0 / 20|2시간 41분

### 120. Module Introduction

1분

### 121. Getting Started

5분

### 122. DOM Element Selection & OOP Rendering

12분

### 123. Interacting with DOM Elements

8분

### 124. Creating & Using an "Autobind" Decorator

5분

### 125. Fetching User Input

9분

### 126. Creating a Re-Usable Validation Functionality

14분

### 127. Rendering Project Lists

11분

### 128. Managing Application State with Singletons

16분

### 129. More Classes & Custom Types

7분

### 130. Filtering Projects with Enums

6분

### 131. Adding Inheritance & Generics

19분

### 132. Rendering Project Items with a Class

12분

### 133. Using a Getter

4분

### 134. Utilizing Interfaces to Implement Drag & Drop

10분

### 135. Drag Events & Reflecting the Current State in the UI

6분

### 136. Adding a Droppable Area

8분

### 137. Finishing Drag & Drop

7분

### 138. Wrap Up

1분

### 139. Useful Resources & Links

1분

## Section 10:Modules & Namespaces

0 / 11|50분

### 140. Module Introduction

1분

### 141. Writing Module Code - Your Options

4분

### 142. Working with Namespaces

11분

### 143. Organizing Files & Folders

9분

### 144. A Problem with Namespace Imports

3분

### 145. Important: Use Chrome or Firefox

1분

### 146. Using ES Modules

12분

### 147. Understanding various Import & Export Syntaxes

5분

### 148. How Does Code In Modules Execute?

2분

### 149. Wrap Up

3분

### 150. Useful Resources & Links

1분

## Section 11:Using Webpack with TypeScript

0 / 9|33분

### 151. Module Introduction

1분

### 152. What is Webpack & Why do we need it?

6분

### 153. Installing Webpack & Important Dependencies

4분

### 154. Adding Entry & Output Configuration

6분

### 155. Adding TypeScript Support with the ts-loader Package

7분

### 156. Finishing the Setup & Adding webpack-dev-server

4분

### 157. Adding a Production Workflow

4분

### 158. Wrap Up

2분

### 159. Useful Resources & Links

1분

## Section 12:3rd Party Libraries & TypeScript

0 / 7|30분

### 160. Module Introduction

1분

### 161. Using JavaScript (!) Libraries with TypeScript

9분

### 162. Using "declare" as a "Last Resort"

2분

### 163. No Types Needed: class-transformer

8분

### 164. TypeScript-embracing: class-validator

6분

### 165. Wrap Up

2분

### 166. Useful Resources & Links

1분

## Section 13:Time to Practice! Let's build a "Select & Share a Place" App (incl. Google Maps)

0 / 8|27분

### 167. Module Introduction

1분

### 168. Project Setup

4분

### 169. Getting User Input

3분

### 170. Setting Up a Google API Key

3분

### 171. Using Axios to Fetch Coordinates for an Entered Address

10분

### 172. Rendering a Map with Google Maps (incl. Types!)

7분

### 173. Working with Maps without a Credit Card

1분

### 174. Useful Resources & Links

1분

## Section 14:React.js & TypeScript

0 / 13|45분

### 175. Module Introduction

1분

### 176. Setting Up a React + TypeScript Project

5분

### 177. How Do React + TypeScript Work Together?

4분

### 178. Working with Props and Types for Props

7분

### 179. Getting User Input with "refs"

7분

### 180. Cross-Component Communication

4분

### 181. Working with State & Types

4분

### 182. Managing State Better

2분

### 183. More Props & State Work

4분

### 184. Adding Styling

1분

### 185. Types for other React Features (e.g. Redux or Routing)

4분

### 186. Wrap Up

2분

### 187. Useful Resources & Links

1분

## Section 15:Node.js + Express & TypeScript

0 / 9|43분

### 188. Module Introduction

1분

### 189. Executing TypeScript Code with Node.js

4분

### 190. Setting up a Project

4분

### 191. Finished Setup & Working with Types (in Node + Express Apps)

5분

### 192. Adding Middleware & Types

6분

### 193. Working with Controllers & Parsing Request Bodies

10분

### 194. More CRUD Operations

10분

### 195. Wrap Up

2분

### 196. Useful Resources & Links

1분

## Section 16:Course Roundup

0 / 1|3분

### 197. Roundup

3분
