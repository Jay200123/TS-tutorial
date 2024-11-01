import { Router } from "./type";
import mongoose, { Document } from "mongoose";

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
    email: string,
    password: string,
    image: Image[],
}

interface IProduct extends Document {
    product_name: string,
    price: number,
    description: string,
    quantity: number,
    image: Image[],
}

interface DataType {
    id?: string,
    [key: string]: any;
}

interface DecodeToken {
    _id: string;
    exp: number;
}

interface AuthenticatedRequest extends Request {
    user?: IUser
}

interface TokenPayLoad {
    _id: mongoose.Types.ObjectId;
}

interface GeneratedToken {
    token: string,
    expiresIn: string | number,
}

export {
    MainRoute,
    IUser,
    IProduct,
    Image,
    DataType,
    DecodeToken,
    AuthenticatedRequest,
    TokenPayLoad,
    GeneratedToken
} 