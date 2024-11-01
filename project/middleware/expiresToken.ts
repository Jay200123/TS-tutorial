import jwt from 'jsonwebtoken';
import { DecodeToken } from '../interface';
import { tokenBlackList } from './blacklistToken';

const expiresToken = (token: string) => {
    const decodedToken = jwt.decode(token) as DecodeToken;

    if (!decodedToken) {
        throw new Error("Invalid token");
    }

    const tokenExpiry = 30 * 60 * 1000;
    setTimeout(() => {
        tokenBlackList.delete(token);
    }, tokenExpiry);
};

export {
    expiresToken,
}