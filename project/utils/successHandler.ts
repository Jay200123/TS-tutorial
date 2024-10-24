import { Response } from 'express';
import { STATUSCODE } from "../constants/index";

const SuccessHandler = (res: Response, message: string, details: any) => {
  res.status(STATUSCODE.SUCCESS).json({
    success: true,
    message: message,
    details: details,
  });
};

export default SuccessHandler;