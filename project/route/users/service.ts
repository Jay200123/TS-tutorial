import User from "./model";
import { Request, Response } from "express";
import { IUser } from "../../interface/index";

const getAll = async () => {
    return await User.find();
}

const getById = async (id: number | string) => {
    return await User.findById(id);
}

const create = async (body: IUser) => {
    return await User.create([body]);
}

const updateById = async (id: number | string, body: IUser) => {
    return await User.findByIdAndUpdate(id, body, {
        new: true,
        runValidators: true,
    });
}

const deleteById = async (id: number | string) => {
    return await User.findByIdAndDelete(id);
}

export default {
    getAll,
    getById,
    create,
    updateById,
    deleteById
}