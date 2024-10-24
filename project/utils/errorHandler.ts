import { STATUSCODE } from "../constants/index";

class ErrorHandler extends Error {
  public statusCode: number;

  constructor(message: string, statusCode: number = STATUSCODE.BAD_REQUEST) {
    super(message);
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }

  toJSON() {
    return {
      success: false,
      error: {
        message: this.message,
      },
    };
  }
}

export default ErrorHandler;
