type Roles = "customer" | "admin" | "employee";   


type User = {
    name: string,
    age: number,    
    role: Roles,
}

type UserList = Array<User>;
const users: UserList = [];  

function addUser(user: User) {
    return users.push(user);    

}

const userResult = addUser({ name: 'John', age: 25, role: 'customer' });
console.log(users);