import jwt, { SignOptions } from 'jsonwebtoken';
import { TokenPayLoad } from '../interface';

export const generateToken = (
    payload: TokenPayLoad = {} as TokenPayLoad,
    expiresIn: string = '1h',
): string => {
    const options: SignOptions = { expiresIn };

    const tokenPayload  = {
        ...payload,
        _id: payload._id.toString(),    
    }

    return jwt.sign(tokenPayload, process.env.JWT_SECRET as string, options);
}

