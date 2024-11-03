import { METHOD, PATH } from "../../constants";
import { Router, Route } from "../../interface"
import authController from "./controller";

const router = Router();

const authRoutes: Route[] = [
    {
        method: METHOD.POST as keyof Router,
        path: PATH.USERS,
        handler: authController.register
    },
    {
        method: METHOD.POST as keyof Router,
        path: PATH.LOGIN,
        handler: authController.login
    },
    {
        method: METHOD.GET as keyof Router,
        path: PATH.LOGOUT,
        handler: authController.logout,
    }
]

authRoutes.forEach((route) => {
    const { method, path,  handler } = route
    router[method as any](path, handler)
});

export default router;