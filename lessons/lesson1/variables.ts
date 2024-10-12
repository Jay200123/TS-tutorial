let fname = "John";
let lname = "Doe";

// fname = 12; // Error: Type '12' is not assignable to type 'string'.

console.log(`Hello ${fname} ${lname}`);

type FIRSTNAME = string;

const fullname: FIRSTNAME = "John Doe";
console.log(fullname)

let height: number = 100;
const width: number = 50;

// height = "200"; // Error: Type '"200"' is not assignable to type 'number'.

const rectangle: number = height * width;
console.log(rectangle)

const isStudent: boolean = true;
// isStudent = 21; // Error: Type '21' is not assignable to type 'boolean'.


if (isStudent) {
    console.log("John is a student");
} else {
    console.log("John is not a student");
}


