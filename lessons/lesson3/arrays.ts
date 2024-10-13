const list1 = [1, 2, 3, 4, 5];
list1.push(6);
console.log(list1)

const list2 = ["John", "Jane", "Doe"];
list2.push("Smith");
console.log(list2)

type Product = {
    name: string,
    price: number,
}

type Item = Array<Product>;
const items: Item = [];

function addItemToCart(product: Product) {
    return items.push(product);
}

addItemToCart({ name: 'Milk', price: 2.99 });
console.log(items); 

type info = {
    block: number,
    lot: number,
    street: string,
    city: string,
}
type Employee = {
    id: number, 
    name: string,
    age: number,
    isStudent: boolean,
    address?: info,
}

type EmployeeList = Array<Employee>;
const employees: EmployeeList = [
    {
        id: 1,
        name: "John",
        age: 25,
        isStudent: true,
        address: { block: 1, lot: 2, street: "Main St", city: "New York" },
    },
    {
        id: 2,
        name: "Jane",
        age: 30,
        isStudent: false,
        address: { block: 2, lot: 3, street: "Broadway", city: "New York" },
    },
    {
        id: 3,
        name: "Doe",
        age: 35,
        isStudent: true,
        address: { block: 3, lot: 4, street: "Wall St", city: "New York" },
    },
];


const findOne = (id: number) => {   
    return employees.find((e) => e.id === id);  // for single object    
}

const employee = findOne(1);
console.log(employee);

const getIds = employees?.map((e) => e?.id);
console.log(getIds);

const findUsers = (Id: Array<number>)=>{
    return employees?.filter((e) => Id.includes(e.id));  // for multiple objects    
};

const employeeResult = findUsers(getIds);
console.log(employeeResult);

let n = 2;
console.log(n **= 3);


