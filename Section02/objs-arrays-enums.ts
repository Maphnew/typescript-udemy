const person1: {
    name: string;
    age: number;
    hobbies: string[];
} = {
    name: 'MPHNW',
    age:30,
    hobbies: ['Sports', 'Cooking']
};

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
// person2.role[1] = 10;
// person2.role = [0, 'role', 'something'] // ERROR

console.log(person1.name);
console.log(person2);

for(const hobby of person1.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()) // error
}

// Mixed
let favoriteAcitivities: any[];
favoriteAcitivities = ['A', 1]

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