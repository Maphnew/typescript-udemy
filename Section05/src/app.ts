interface Greetable {
    readonly name: string;

    greet(phrase: string): void;
}

class Person implements Greetable{
    name:string;
    age = 30;

    constructor(name:string){
        this.name = name;
    }

    greet(phrase: string) {
        console.log(phrase + ' ' + this.name)
    }
}

let user1: Greetable;

user1 = new Person('Maph')
// user1.name = 'Someone' // Error

user1.greet('Hi! I am') // Hi! I am Maph
console.log(user1) // Person {age: 30, name: 'Maph'}