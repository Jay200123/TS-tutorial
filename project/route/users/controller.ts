import * as userService from './service';
import { ErrorHandler, SuccessHandler, upload, uploadImage } from '../../utils';
import { NextFunction, Request, Response } from '../../interface/index';
import { cloudinary } from '../../config';


const getAllUsers = async (req: Request, res: Response) => {
    const data = await userService.getAll();
    return !data ? new ErrorHandler('No data found', 404) : SuccessHandler(res, "Data Found", data);
};

const getUserById = async (req: Request, res: Response) => {
    const data = await userService.getById(req.params.id);
    return !data ? new ErrorHandler('No data found', 404) : SuccessHandler(res, "Data Found", data);
}


const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    upload.array("image")
    const user = await userService.getById(req.params.id)
    const oldImage = Array.isArray(user?.image) ? user.image.map((i) => i?.public_id) : [];

    const image = await uploadImage(req.files as Express.Multer.File[], oldImage);
    const data = await userService.updateById(
        req.params.id,
        {
            ...req.body,
            image: image
        }
    )

    return SuccessHandler(res, "Data Updated", data);
}


const deleteUser = async (req: Request, res: Response) => {
    const data = await userService.deleteById(req.params.id);
    const userImage = Array.isArray(data?.image) ? data.image.map((i) => i?.public_id) : [];
    await cloudinary.api.delete_resources(userImage)

    return !data
        ? new ErrorHandler('No data found', 404)
        : SuccessHandler(res, "Data Deleted", data);
}

export default {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
}
