import service from './service';
import { ErrorHandler, SuccessHandler } from '../../utils';
import { NextFunction, Request, Response } from 'express';


const getAllUsers = async (req: Request, res: Response) => {
    const data = await service.getAll();
    return !data ? new ErrorHandler('No data found', 404) : SuccessHandler(res, "Data Found", data);
};

const getUserById = async (req: Request, res: Response) => {
    const data = await service.getById(req.params.id);
    return !data ? new ErrorHandler('No data found', 404) : SuccessHandler(res, "Data Found", data);
}

const createUser = async (req: Request, res: Response, next: NextFunction) => {
    const data = await service.create(req.body);
    return SuccessHandler(res, "Data Created", data);
}


const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    const data = await service.updateById(
        req.params.id,
        {
            ...req.body
        }
    )

    return SuccessHandler(res, "Data Updated", data);
}


const deleteUser = async (req: Request, res: Response) => {
    const data = await service.deleteById(req.params.id);
    return !data ? new ErrorHandler('No data found', 404) : SuccessHandler(res, "Data Deleted", data);
}

export default {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}
