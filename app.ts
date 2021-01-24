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