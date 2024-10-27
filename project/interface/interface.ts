import { Router } from "./type";
import { Document } from "mongoose";

interface MainRoute {
    path: string | string[];
    route: Router
}

interface Image {
    public_id: string;
    url: string;
    originalname: string;
}


interface IUser extends Document {
    name: string,
    age: number,
    section: string,
    image: Image,
}

interface IProduct extends Document {
    product_name: string,
    price: number,
    description: string,
    quantity: number,
    image: Image,
}

export {
    MainRoute,
    IUser,
    IProduct,
    Image,
} 