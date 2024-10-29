import { Response, DataType } from "../interface";
import { generateToken } from "./generateToken";

export const sendToken = (
    res: Response,
    data: DataType,
    message: Record<string, any> = {},
    statusCode: number
): void => {
    const token = generateToken(data?._id);

    res.status(statusCode).json({
        success: true,
        message,
        data,
        token
    })
}