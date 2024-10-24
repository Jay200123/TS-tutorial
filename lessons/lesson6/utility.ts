let studentId = 1;

type Student = {
    id: number,
    name: string,
    age: number,
    grade: number,
}

type Updates = Partial<Student>;

type Attendance = Array<Student>;
const students: Attendance = [
    {
        id: studentId++,
        name: "John",
        age: 12,
        grade: 6
    },
    {
        id: studentId++,
        name: "Jane",
        age: 13,
        grade: 7
    },
    {
        id: studentId++,
        name: "Doe",
        age: 14,
        grade: 8
    }
];

function updateStudent(id: number, updates: Updates): Student | undefined {
    const data = students.find((s) => s.id === id);

    const updatedStudent = Object.assign(data, updates);
    return updatedStudent;
}

const updateData = {
    age: 15,
    grade: 9
}

const studentResult = updateStudent(1, updateData);
console.log(studentResult);


function addNewStudent(newUser: any): Student | undefined {
    const users: Student = {
        ...newUser
    };

    students.push(users);
    return users;
}

const student = {
    id: studentId++,
    name: "Test",
    age: 14,
    grade: 8
}

addNewStudent(student); 

// const test = {...student};  