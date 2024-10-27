import { IProduct } from "../../interface";
import Product from "./model";

const getAll = async () => {
    return await Product.find();
}

const getById = async (id: string) => {
    return await Product.findById(id);
}

const create = async (body: IProduct) => {
    return await Product.create([body])
}

const updateById = async (id: string, body: Partial<IProduct>) => {
    return await Product.findByIdAndUpdate(id, body, {
        new: true,
        runValidators: true,
    });
}

const deletById = async (id: string) => {
    return await Product.findByIdAndDelete(id);
}

export {
    getAll,
    getById,
    create,
    updateById,
    deletById
}