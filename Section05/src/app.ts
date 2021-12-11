interface Person {
    name: string;
    age: number;

    greet(phrase: string): void;
}

let user1: Person;

user1 = {
    name: 'Maph',
    age: 20,
    greet(phrase: string){
        console.log(phrase + ' ' + this.name)
    }
}

user1.greet('Hi! I am') // Hi! I am Maph