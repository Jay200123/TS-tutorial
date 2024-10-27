import userController from "./controller";
import { METHOD, PATH } from "../../constants/index";
import { Router, Route } from "../../interface/type";

const router = Router();

const userRoutes: Route[] = [
    {
        method: METHOD.GET as keyof Router,
        path: PATH.USERS,
        handler: userController.getAllUsers
    },
    {
        method: METHOD.GET as keyof Router,
        path: PATH.USER_ID,
        handler: userController.getUserById
    },
    {
        method: METHOD.POST as keyof Router,
        path: PATH.USERS,
        handler: userController.createUser
    },
    {
        method: METHOD.PATCH as keyof Router,
        path: PATH.EDIT_USER_ID,
        handler: userController.updateUser
    },
    {
        method: METHOD.DELETE as keyof Router,
        path: PATH.USER_ID,
        handler: userController.deleteUser
    }
];

userRoutes.forEach((route) => {
    const { method, path = "", handler } = route;
    router[method as any](path, handler);
});

export default router;
