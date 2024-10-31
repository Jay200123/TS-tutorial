import { METHOD, PATH } from "../../constants";
import { Router, Route } from "../../interface"
import authController from "./controller";

const router = Router();

const authRoutes: Route[] = [
    {
        method: METHOD.POST as keyof Router,
        path: PATH.USERS,
        middleware: [],
        handler: authController.register
    },
    {
        method: METHOD.POST as keyof Router,
        path: PATH.LOGIN,
        middleware: [],
        handler: authController.login
    }
]

authRoutes.forEach((route) => {
    const { method, path, middleware = [], handler } = route
    router[method as any](path, middleware, handler)
});

export default router;