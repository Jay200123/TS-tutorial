import userController from "./controller";
import { METHOD, PATH } from "../../constants/index";
import { Router, Route } from "../../interface/type";
import { verifyToken } from "../../middleware/verifyToken";

const router = Router();

const userRoutes: Route[] = [
    {
        method: METHOD.GET as keyof Router,
        path: PATH.USERS,
        middleware: [verifyToken], 
        handler: userController.getAllUsers
    },
    {
        method: METHOD.GET as keyof Router,
        path: PATH.USER_ID,
        middleware: [verifyToken],
        handler: userController.getUserById
    },
    {
        method: METHOD.PATCH as keyof Router,
        path: PATH.EDIT_USER_ID,
        middleware: [verifyToken],
        handler: userController.updateUser
    },
    {
        method: METHOD.DELETE as keyof Router,
        path: PATH.USER_ID,
        middleware: [verifyToken],
        handler: userController.deleteUser
    }
];

userRoutes.forEach((route) => {
    const { method, path, handler } = route;
    router[method as any](path, handler);
});

export default router;
