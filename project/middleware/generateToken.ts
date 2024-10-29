import jwt from "jsonwebtoken";

export const generateToken = (Id: string) => {
    return jwt.sign(
        Id,
        process.env.JWT_SECRET,
        {
        expiresIn: process.env.TOKEN_EXPIRY
        }
    );
}