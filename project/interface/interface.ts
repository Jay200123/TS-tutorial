import { Router } from "./type";
import { Document } from "mongoose";

interface MainRoute {
    path: string | string[];
    route: Router
}

interface IUser extends Document {
    name: string,
    age: number,
    section: string,
}

interface IProduct extends Document {
    product_name: string,
    price: number,
    description: string,
    quantity: number
}

export {
    MainRoute,
    IUser,
    IProduct,
} 