type Address = {    
    block: number,
    lot: number,
    street: string, 
    city: string,   
}

type Person = {
    name: string,
    age: number,
    isStudent: boolean,
    address?: Address,   

}

const personAddress: Address = {
    block: 1,
    lot: 2,
    street: "Main St",
    city: "New York",   
}

const person1: Person = {
    name: "John",      
    age: 25,
    isStudent: true,
    address: personAddress,   
}

const person2: Person = {   
    name : "Jane",  
    age: 30,
    isStudent: false,
}

console.log(person1);
console.log(person2);
