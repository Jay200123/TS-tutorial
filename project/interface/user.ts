import { Document } from "mongoose";

interface IUser extends Document {
    name: string,
    age: number,
    section: string,
}

export {
    IUser 
} 