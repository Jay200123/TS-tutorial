import {
    Response,
    NextFunction,
    DecodeToken,
    AuthenticatedRequest
} from "../interface";
import * as userService from "../route/users/service";
import { ErrorHandler } from "../utils";
import jwt from "jsonwebtoken";
import { tokenBlackList } from "./blacklistToken";

const verifyToken = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {

    const token = req.headers['authorization'].split(' ')[1];
    if (!req.headers['authorization'] || !req.headers['authorization'].startsWith('Bearer')) {
        return next(new ErrorHandler("Authorization header missing"));
    }

    if (tokenBlackList.has(token)) {
        return next(new ErrorHandler("Token Expired, sign in again."));
    }

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET) as DecodeToken;
        req.user = await userService.getById(decode._id);
        next();
    } catch (err) {
        return next(new ErrorHandler("User must login first"));
    }
}

export {
    verifyToken,
}
