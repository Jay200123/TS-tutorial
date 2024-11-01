import * as userService from "../users/service";
import {
    ErrorHandler,
    SuccessHandler,
    uploadImage,
    hashPassword
} from "../../utils";
import {
    Request,
    Response,
    NextFunction
} from "../../interface";
import bcrypt from "bcrypt";
import {
    generateToken,
    blacklistToken,
    expiresToken
} from "../../middleware";
import mongoose from "mongoose";


const register = async (req: Request, res: Response, next: NextFunction) => {
    const image = await uploadImage(req.files as Express.Multer.File[], []);
    const password = await hashPassword(req.body.password);

    const data = await userService.create(
        {
            ...req.body,
            image: image,
            password: password,
        }
    );

    return SuccessHandler(res, "Data Created", data);
}

const login = async (req: Request, res: Response, next: NextFunction) => {
    const data = await userService.getByEmail(req.body.email);

    if (!data) {
        throw new ErrorHandler("User Email not found");
    }

    const isPasswordMatch = await bcrypt.compare(req.body.password, data.password);
    if (!isPasswordMatch) {
        return next(new ErrorHandler('Wrong password', 401));
    }

    const token = generateToken({ _id: data._id as mongoose.Types.ObjectId });
    SuccessHandler(res, "Login Success", data, token);
}

const logout = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization'].split(' ')[1];

    if (token) {
        blacklistToken(token);
        expiresToken(token);
    }

    return SuccessHandler(res, "Logout Success", []);
}

export default {
    login,
    register,
    logout
}