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

// type Combinable = string | number;
// type Numeric = number | boolean;

// type Universal = Combinable & Numeric;

// function add(a: Combinable, b: Combinable) {
//   if (typeof a === "string" || typeof b === "string") {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log(emp.name);
//   if ("privileges" in emp) {
//     console.log(emp.privileges);
//   }
//   if ("startDate" in emp) {
//     console.log(emp.startDate);
//   }
// }

// printEmployeeInformation(e1);
// printEmployeeInformation({ name: "newMaph", startDate: new Date() });

// class Car {
//   drive() {
//     console.log("Drive...");
//   }
// }

// class Truck {
//   drive() {
//     console.log("Drive truck...");
//   }
//   loadCargo(amount: number) {
//     console.log("Loading Cargo ... " + amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   // if ("loadCargo" in vehicle) {
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//   type: 'bird';
//   flyingSpeed: number;
// }

// interface Horse {
//   type: 'horse';
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// // function moveAnimal(animal: Animal) {
// //   if("flyingSpeed" in animal) {
// //     console.log("Moving with speed: ", animal.flyingSpeed);
// //   }
// // }

// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case "bird":
//         speed = animal.flyingSpeed;
//     break;
//     case "horse":
//         speed = animal.runningSpeed;
//       break;
//     default:
//       break;
//   }
//   console.log("Moving with speed: ", speed)
// }

// moveAnimal({type: "bird", flyingSpeed: 10});

// // ### 86. Type Casting

// const paragraph = document.getElementById("message-output"); // const paragraph: HTMLElement | null
// const userInputElement1 = document.getElementById("user-input")!; // const userInputElement: HTMLElement | null
// // This does not work
// // userInputElement1.value = "Hi there!";

// const userInputElement = <HTMLInputElement>document.getElementById("user-input")!; // const userInputElement: HTMLInputElement
// // This does work
// userInputElement.value = "Hi there!";

// const userInputElementUsingAlias = document.getElementById("user-input")! as HTMLInputElement; // const userInputElement: HTMLInputElement
// // This does work too
// userInputElementUsingAlias.value = "Hey!"

// // #### The non-null assertion operator ( ! )
// const inputElement1 = document.getElementById("user-input"); // const inputElement1: HTMLElement | null
// const inputElement2 = document.getElementById("user-input")!; // const inputElement2: HTMLElement

// // Alt
// const inputElement3 = document.getElementById("user-input");
// // This does work too
// if(inputElement3) {
//   (inputElement3 as HTMLInputElement).value = "Hi Again!"
// }

// // ### 87. Index Properties

// interface ErrorContainer { // {email: "Not a valid email", username: "Must start with a Charater"}
//   [prop: string]: string;
// }

// const erroBag: ErrorContainer = {
//   email: "Not a Valid Email!",
//   userName: "Must start with a capital character!"
// };

// ### 88. Function Overloads

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
