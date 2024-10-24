import { Router } from "../interface";
import userRoutes from "./users/route";
import { PATH } from "../constants";


const router = Router();

interface Route {
    path: string | string[];
    route: Router
}

const routerList: Route[] = [
    {
        path: PATH.USERS,
        route: userRoutes
    }
]

routerList.map(routes => {
    const { path, route } = routes
    router.use(path, route)
})
export default router