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

```ts
class Department {
  // private id: string;
  // private name: string;
  private employees: string[] = [];

  constructor(private id: string, public name: string) {
    // <-- shorthand init
    // this.id = id;
    // this.name = name;
  }

  describe(this: Department) {
    console.log(`Department(${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("d1", "Accounting");
```

### 64. "readonly" Properties

3분

```ts
class Department {
  // private readonly id: string;
  // private name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = name;
  }

  describe(this: Department) {
    console.log(`Department(${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.id = "d2"; // <-- Error
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}
```

### 퀴즈 4: Class Basics

### 65. Inheritance

8분

- IT Department

```ts
class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

const it = new ITDepartment("d1", ["Mphnw"]);
it.addEmployee("MAX");
it.addEmployee("Maphnew");
it.describe(); // Department(d1): IT
it.printEmployeeInformation(); // 2 ['MAX', 'Maphnew']
console.log(it);
// ITDepartment
// {
//   admins: ['Mphnw']
//   employees: (2) ['MAX', 'Maphnew']
//   id: "d1"
//   name: "IT"
//   [[Prototype]]: Department
// }
```

- Accounting Department

```ts
class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accouting");
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const accountingDepartment = new AccountingDepartment("d2", []);

accountingDepartment.addReport("Something went wrong...");

accountingDepartment.printReports(); // ['Something went wrong...']
```

### 66. Overriding Properties & The "protected" Modifier

3분

- To access employees, change employees from private to protected

```ts
class Department {
  protected employees: string[] = []; // private -> protected

  constructor(private readonly id: string, public name: string) {}

  describe(this: Department) {
    console.log(`Department(${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accouting");
  }

  addEmployee(name: string) {
    this.employees.push(name); // <- can access to employees
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

accountingDepartment.addEmployee("maphnew");
accountingDepartment.printEmployeeInformation(); // 1 ['maphnew']
```

### 67. Getters & Setters

7분

- getter

```ts
class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }

    throw new Error("No report found.");
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accouting");
    this.lastReport = reports[0];
  }
  // ...
}

accountingDepartment.addReport("Something went wrong...");
console.log(accountingDepartment.mostRecentReport); // Something went wrong...
```

- setter

```ts
class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accouting");
    this.lastReport = reports[0];
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
}

// accountingDepartment.mostRecentReport = ""; // Uncaught Error: Please pass in a valid value!
accountingDepartment.addReport("Something went wrong...");
accountingDepartment.mostRecentReport = "Year End Report";
console.log(accountingDepartment.mostRecentReport); // Year End Report
```

### 68. Static Methods & Properties

5분

- static

```ts
class Department {
  // ...
  static fiscalYear = "2020";
  static createEmployee(name: string) {
    return { name: name };
  }

  // ...
}

const employee1 = Department.createEmployee("Maph");
console.log(employee1, Department.fiscalYear); // {name: 'Maph'} '2020'
```

### 69. Abstract Classes

5분

- Abstract 추상화

```ts
// override

class Department {
  // ...

  constructor(protected readonly id: string, public name: string) {} // <-- protected
}

class AccountingDepartment extends Department {
  describe() {
    console.log("Accounting Department ID: " + this.id);
  }
}
accountingDepartment.describe(); // Accounting Department ID: d2
```

- abstract: Enforce to share common method or property

```ts
abstract class Department {
  // ...
  abstract describe(this: Department): void;
}

class ITDepartment extends Department {
  // ...
  describe() {
    console.log("IT Department ID: " + this.id);
  }
}

it.describe(); // IT Department ID: d1
```

### 70. Singletons & Private Constructors

5분

- singleton pattern - private constructor & static method

```ts
class AccountingDepartment extends Department {
  private static instance: AccountingDepartment;
  private constructor(id: string, private reports: string[]) {
    super(id, "Accouting");
    this.lastReport = reports[0];
  }
  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }
}

const accountingDepartment = AccountingDepartment.getInstance();
const accountingDepartment2 = AccountingDepartment.getInstance();

console.log(accountingDepartment, accountingDepartment2);
// same instance
```

### 71. Classes - A Summary

2분

- Class
- Property
- Access Modifiers
- private, protected, public
- method
- static method
- abstract method, abstract class
- inheritance
- extends keyword
- override method
- singleton pattern

### 퀴즈 5: Classes

### 72. A First Interface

4분

- Interface is structure of object

```ts
interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: "Maph",
  age: 20,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};

user1.greet("Hi! I am"); // Hi! I am Maph
```

### 73. Using Interfaces with Classes

6분

- Why interface?
- We can use type

```ts
type Person = {
  name: string;
  age: number;

  greet(phrase: string): void;
};

let user1: Person;

user1 = {
  name: "Maph",
  age: 20,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};

user1.greet("Hi! I am"); // Hi! I am Maph
```

- Only be used to describe the structure of an object
- type is flexible
- interface is clearer

```ts
interface Greetable {
  name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(name: string) {
    this.name = name;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user1: Greetable;

user1 = new Person("Maph");

user1.greet("Hi! I am"); // Hi! I am Maph
console.log(user1); // Person {age: 30, name: 'Maph'}
```

### 74. Why Interfaces?

2분

### 75. Readonly Interface Properties

2분

- readonly, no access modifiers like public private ...

```ts
interface Greetable {
  readonly name: string;

  greet(phrase: string): void;
}

user1 = new Person("Maph");
// user1.name = 'Someone' // Error
```

### 76. Extending Interfaces

3분

```ts
interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}
```

### 77. Interfaces as Function Types

3분

- function type

```ts
type AddFn = (n1: number, n2: number) => number;

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};
```

- function interface

```ts
// type AddFn = (a: number, b:number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};
```

### 78. Optional Parameters & Properties

4분

- optional property

```ts
interface Named {
  readonly name: string;
  outputName?: string;
}
```

```ts
interface Named {
  readonly name?: string; // <--optional property
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string; // <--optional property
  age = 30;

  constructor(n?: string) {
    // <--optional property
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("Hi!");
    }
  }
}

let user1: Greetable;

user1 = new Person(); // <--no name
```

### 79. Compiling Interfaces to JavaScript

2분

```json
// tsconfig.json
    "target": "es5",
    "module": "commonjs",
```

```js
// app.js

"use strict";
var add;
add = function (n1, n2) {
  return n1 + n2;
};
var Person = (function () {
  function Person(n) {
    this.age = 30;
    if (n) {
      this.name = n;
    }
  }
  Person.prototype.greet = function (phrase) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("Hi!");
    }
  };
  return Person;
})();
var user1;
user1 = new Person();
user1.greet("Hi! I am");
console.log(user1);
//# sourceMappingURL=app.js.map
```

### 퀴즈 6: Interfaces

### 80. Wrap Up

2분

### 81. Useful Resources & Links

1분

## Section 6:Advanced Types

0 / 12|52분

### 82. Module Introduction

1분

#### Advanced Typing Concepts

1. Intersection Types
1. Type Guards
1. Discriminated Unions
1. Type Casting
1. Function Overloads

### 83. Intersection Types

5분

```ts
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "maph",
  privileges: ["create-server"],
  startDate: new Date(),
};
```

- Can be interfaces

```ts
interface Admin {
  name: string;
  privileges: string[];
}

interface Employee {
  name: string;
  startDate: Date;
}

interface ElevatedEmployee extends Admin, Employee {}

const e1: ElevatedEmployee = {
  name: "maph",
  privileges: ["create-server"],
  startDate: new Date(),
};
```

- Intersection union types

```ts
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;
```

### 84. More on Type Guards

11분

```ts
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}
```

```ts
type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log(emp.name);
  if ("privileges" in emp) {
    console.log(emp.privileges);
  }
  if ("startDate" in emp) {
    console.log(emp.startDate);
  }
}

printEmployeeInformation(e1);
printEmployeeInformation({ name: "newMaph", startDate: new Date() });
```

```ts
class Car {
  drive() {
    console.log("Drive...");
  }
}

class Truck {
  drive() {
    console.log("Drive truck...");
  }
  loadCargo(amount: number) {
    console.log("Loading Cargo ... " + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // if ("loadCargo" in vehicle) {
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);
```

### 85. Discriminated Unions

- 식별된 조합들

```
tsc -w
```

```
yarn start
```

6분

- Interface

```ts
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   if("flyingSpeed" in animal) {
//     console.log("Moving with speed: ", animal.flyingSpeed);
//   }
// }

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
    default:
      break;
  }
  console.log("Moving with speed: ", speed);
}
```

### 86. Type Casting

- 개발자에 의해 의도적으로 값의 타입을 변환하는 것을 `명시적 타입 변환(Explicit coercion)` 또는 `타입 캐스팅(Type casting)`이라 한다.

8분

```ts
const paragraph = document.getElementById("message-output"); // const paragraph: HTMLElement | null
const userInputElement1 = document.getElementById("user-input")!; // const userInputElement: HTMLElement | null
// This does not work
// userInputElement1.value = "Hi there!";

const userInputElement = <HTMLInputElement>(
  document.getElementById("user-input")!
); // const userInputElement: HTMLInputElement
// This does work
userInputElement.value = "Hi there!";

const userInputElementUsingAlias = document.getElementById(
  "user-input"
)! as HTMLInputElement; // const userInputElement: HTMLInputElement
// This does work
userInputElementUsingAlias.value = "Hey!";
```

#### The non-null assertion operator ( ! )

```ts
const inputElement1 = document.getElementById("user-input"); // const inputElement1: HTMLElement | null
const inputElement2 = document.getElementById("user-input")!; // const inputElement2: HTMLElement

// Alt
const inputElement3 = document.getElementById("user-input");
// This does work too
if (inputElement3) {
  (inputElement3 as HTMLInputElement).value = "Hi Again!";
}
```

### 87. Index Properties

7분

```ts
interface ErrorContainer {
  // {email: "Not a valid email", username: "Must start with a Charater"}
  [prop: string]: string;
}

const erroBag: ErrorContainer = {
  email: "Not a Valid Email!",
  userName: "Must start with a capital character!",
};
```

### 88. Function Overloads

6분

```ts
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add("Maph", "Nat"); // function add(a: string, b: string): string (+3 overloads)
result.split(" ");
```

### 89. Optional Chaining

4분

```ts
const fetchedUserData = {
  id: "u1",
  name: "maph",
  // job: { title: "CEO", description: "My own company" },
};

console.log(fetchedUserData?.job?.title);
```

### 90. Nullish Coalescing

3분

```ts
const userInput = "";

const storedData = userInput ?? "DEFAULT";

console.log(storedData); // ""
```

### 퀴즈 7: Advanced Types

### 91. Wrap Up

1분

### 92. Useful Resources & Links

1분

## Section 7:Generics

0 / 12|52분

### 93. Module Introduction

1분

Module Content

- What?
- Generic Functions & Classes
- Constraints
- Special TypeScript Types

### 94. Built-in Generics & What are Generics?

9분

- 예제

```ts
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
```

- 추가 정보

[문서](https://www.typescriptlang.org/ko/docs/handbook/2/generics.html)

- 재사용 가능한 컴포넌트를 구축하는 것
- 현재의 데이터와 미래의 데이터 모두를 다룰 수 있는 컴포넌트는 거대한 소프트웨어 시스템을 구성하는 데 있어 가장 유연한 능력을 제공
- C#, Java 같은 언어에서, 재사용 가능한 컴포넌트를 생성하는 도구상자의 주요 도구 중 하나는 제네릭
- 단일 타입이 아닌 다양한 타입에서 작동하는 컴포넌트를 작성
- 제네릭을 통해 여러 타입의 컴포넌트나 자신만의 타입을 사용할 수 있음

#### 제네릭의 Hello World

- 제네릭이 없다면, identity 함수에 특정 타입을 주어야 합니다.

```ts
function identity(arg: number): number {
  return arg;
}
```

- 또는 `any` 타입을 사용하여 identity 함수를 기술할 수 있습니다.

```ts
function identity(arg: any): any {
  return arg;
}
```

- `any`를 쓰는 것은 어떤 타입이든 받을 수 있다는 점에서 제네릭이지만, 실제로 함수가 반환할 때 어떤 타입인지에 대한 정보는 잃게 됩니다.
- 대신에 우리는 무엇이 반환되는지 표시하기 위해 인수의 타입을 캡처할 방법이 필요합니다. 여기서는 값이 아닌 타입에 적용되는 타입 변수를 사용할 것입니다.

```ts
function identity<Type>(arg: Type): Type {
  return arg;
}
```

- identity 함수에 `Type`라는 타입 변수를 추가했습니다. `Type`은 유저가 준 인수의 타입을 캡처하고 (예 - `number`), 이 정보를 나중에 사용할 수 있게 합니다. 여기에서는 `Type`을 반환 타입으로 다시 사용합니다. 인수와 반환 타입이 같은 타입을 사용하고 있는 것을 확인할 수 있습니다. 이를 통해 타입 정보를 함수의 한쪽에서 다른 한쪽으로 운반할 수 있게끔 합니다.

- 일단 제네릭 함수를 작성하고 나면, 두 가지 방법으로 호출할 수 있습니다. 첫 번째 방법은 함수에 타입 인수를 포함한 모든 인수를 전달하는 방법입니다.

```ts
let output = identity<string>("myString"); // 출력 타입은 'string'입니다.
```

- 여기서 우리는 함수를 호출할 때의 인수 중 하나로써 `Type`을 `string`으로 명시해 주고 인수 주변에 `()` 대신 `<>`로 감싸주었습니다.

- 두 번째 방법은 아마 가장 일반적인 방법입니다. 여기서는 타입 인수 추론을 사용합니다. - 즉, 우리가 전달하는 인수에 따라서 컴파일러가 `Type`의 값을 자동으로 정하게 하는 것입니다.

```ts
let output = identity("myString"); // 출력 타입은 'string'입니다.
```

- 타입 인수를 꺾쇠괄호(`<>`)에 담아 명시적으로 전달해 주지 않아도 `"myString"`을 보고 그것의 타입으로 `Type`을 정합니다. 인수 추론은 코드를 간결하고 가독성 있게 하는 데 있어 유용하지만 더 복잡한 예제에서 컴파일러가 타입을 유추할 수 없는 경우엔 명시적인 타입 인수 전달이 필요할 수도 있습니다.

### 95. Creating a Generic Function

9분

- Without Generic

```ts
function merge1(objA: object, objB: object) {
  return Object.assign(objA, objB);
}

const mergedObj1 = merge1({ name: "Max" }, { age: 30 });

console.log(mergedObj1); // {name: 'Max', age: 30}
// console.log(mergedObj1.name); // Property 'name' does not exist on type 'object'.
```

- Use Generic

```ts
function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Max" }, { age: 30 });
const mergedObj2 = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });

console.log(mergedObj); // {name: 'Max', age: 30}
console.log(mergedObj.name); // Max
```

### 96. Working with Constraints

4분

```ts
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// T type can be any object with any structure, but it has to be an object

// const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, 30); // error
const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
console.log(mergedObj); // {name: 'Max', hobbies: ["Sports"], age: 30}
```

### 97. Another Generic Function

6분

```ts
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
```

### 98. The "keyof" Constraint

3분

```ts
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

extractAndConvert({ name: "Mpahnew" }, "name");
```

### 99. Generic Classes

9분

```ts
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Maph");
textStorage.addItem("Nat");
textStorage.removeItem("Maph");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const maphObj = { name: "Maph" };
// objStorage.addItem(maphObj);
// objStorage.addItem({ name: "Nat" });
// // ...
// objStorage.removeItem(maphObj);
// console.log(objStorage.getItems());
```

### 100. A First Summary

1분

### 101. Generic Utility Types

7분

- Partial, Readonly type

```ts
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["Maph", "Anna"];
// names.push('Nat'); // error
// names.pop(); // error
```

### 102. Generic Types vs Union Types

4분

- Mixed data vs Flexable static type

```ts
class DataStorage {
  private data: (string | number | boolean)[] = [];

  addItem(item: string | number | boolean) {
    this.data.push(item);
  }

  removeItem(item: string | number | boolean) {
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
```

### 퀴즈 8: Generics

### 103. Useful Resources & Links

1분

## Section 8:Decorators

0 / 16|1시간 17분

### 104. Module Introduction

2분

- Meta-Programming

- What?
- Decorator Usage
- Examples!

### 105. A First Class Decorator

5분

```ts
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
```

### 106. Working with Decorator Factories

2분

```ts
function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger("LOGGING - PERSON")
class Person {
  name = "Maph";

  constructor() {
    console.log("Creating person object...");
  }
}

const pers = new Person();

console.log(pers);
```

### 107. Building More Useful Decorators

6분

```js
function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

// @Logger("LOGGING - PERSON")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "Maph";

  constructor() {
    console.log("Creating person object...");
  }
}

const pers = new Person();

console.log(pers);
```

### 108. Adding Multiple Decorators

3분

#### Decorator Order

1. WithTemplate
2. Logger

   (bottom up)

#### Decorator Factory Order

1. Logger
2. WithTemplate

   (top down)

```ts
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
```

### 109. Diving into Property Decorators

5분

```ts
function Log(target: any, propertyName: string | Symbol) {
  console.log("Property decorator!");
  console.log(target, propertyName);
}

class Product {
  @Log
  title: string;
  private _price: number;

  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price - should be positive!");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}
```

### 110. Accessor & Parameter Decorators

6분

```ts
function Log(target: any, propertyName: string | Symbol) {
  console.log("Property decorator!");
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor decorator!");
  console.log(target); // {constructor: ƒ, getPriceWithTax: ƒ}
  console.log(name); // price
  console.log(descriptor); // {get: undefined, enumerable: false, configurable: true, set: ƒ}
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator!");
  console.log(target); // {constructor: ƒ, getPriceWithTax: ƒ}
  console.log(name); // getPriceWithTax
  console.log(descriptor); // {writable: true, enumerable: false, configurable: true, value: ƒ}
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log("Parameter decorator!");
  console.log(target); // {constructor: ƒ, getPriceWithTax: ƒ}
  console.log(name); // getPriceWithTax
  console.log(position); // 0
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price - should be positive!");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }
  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}
```

### 111. When Do Decorators Execute?

3분

```ts
function Log(target: any, propertyName: string | Symbol) {
  console.log("Property decorator!");
  console.log(target, propertyName);
}
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log("Parameter decorator!");
  console.log(target);
  console.log(name);
  console.log(position);
}
class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price - should be positive!");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }
  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

const p1 = new Product("Book", 19);
const p2 = new Product("Book2", 29);
```

### 112. Returning (and changing) a Class in a Class Decorator

9분

```ts
function WithTemplate(template: string, hookId: string) {
  console.log("TEMPLATE FACTORY");
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log("Rendering Template");
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
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

// const pers = new Person();

// console.log(pers);
```

### 113. Other Decorator Return Types

4분

### 114. Example: Creating an "Autobind" Decorator

9분

```ts
// before
class Printer {
  message = "This works!";

  showMessage() {
    console.log(this.message);
  }
}
const p = new Printer();
const button = document.querySelector("button")!;
button.addEventListener("click", p.showMessage.bind(p));
```

```ts
// after
function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

class Printer {
  message = "This works!";

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}
const p = new Printer();
p.showMessage();
const button = document.querySelector("button")!;
button.addEventListener("click", p.showMessage);
```

### 115. Validation with Decorators - First Steps

7분

```ts
function Required() {}

function PositiveNumber() {}

function validate(obj: object) {}
class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form");
courseForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);

  if (!validate(createdCourse)) {
    alert("Invalid Input");
    return;
  }
  console.log(createdCourse);
});
```

### 116. Validation with Decorators - Finished

12분

```ts
interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]; // ['required', 'prositive']
  };
}

const registerValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registerValidators[target.constructor.name] = {
    ...registerValidators[target.constructor.name],
    [propName]: ["required"],
  };
}

function PositiveNumber(target: any, propName: string) {
  registerValidators[target.constructor.name] = {
    ...registerValidators[target.constructor.name],
    [propName]: ["positive"],
  };
}

function validate(obj: any) {
  const objValidatorConfig = registerValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}
class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form");
courseForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);

  if (!validate(createdCourse)) {
    alert("Invalid Input");
    return;
  }
  console.log(createdCourse);
});
```

### 117. Fixing a Validator Bug

1분

```ts
const registerValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registerValidators[target.constructor.name] = {
    ...registerValidators[target.constructor.name],
    [propName]: [
      ...(registerValidators[target.constructor.name]?.[propName] ?? []),
      "required",
    ],
  };
}

function PositiveNumber(target: any, propName: string) {
  registerValidators[target.constructor.name] = {
    ...registerValidators[target.constructor.name],
    [propName]: [
      ...(registerValidators[target.constructor.name]?.[propName] ?? []),
      "positive",
    ],
  };
}
```

### 118. Wrap Up

3분

### 119. Useful Resources & Links

1분

## Section 9:Practice Time! Let's build a Drag & Drop Project

0 / 20|2시간 41분

### 120. Module Introduction

1분

- Practice Time!

Using TypeScript in a project

### 121. Getting Started

5분

- Ready to Start

### 122. DOM Element Selection & OOP Rendering

12분

```ts
class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;

  constructor() {
    this.templateElement = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById("app")! as HTMLDivElement;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.attach();
  }

  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}

const prjInput = new ProjectInput();
```

### 123. Interacting with DOM Elements

8분

```ts
class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    this.templateElement = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById("app")! as HTMLDivElement;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = "user-input";

    this.titleInputElement = this.element.querySelector(
      "#title"
    ) as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector(
      "#description"
    ) as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector(
      "#people"
    ) as HTMLInputElement;

    this.configure();
    this.attach();
  }

  private submitHandler(event: Event) {
    event.preventDefault();
    console.log(this.titleInputElement.value);
  }

  private configure() {
    this.element.addEventListener("submit", this.submitHandler.bind(this));
  }

  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}

const prjInput = new ProjectInput();
```

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
