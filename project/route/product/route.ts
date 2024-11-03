import productController from "./controller";
import { METHOD, PATH } from "../../constants";
import { Route, Router } from "../../interface";
import { verifyToken } from "../../middleware/verifyToken";

const router = Router();

const productRoutes: Route[] = [
    {
        method: METHOD.GET as keyof Router,
        path: PATH.PRODUCTS,
        middleware: [verifyToken],
        handler: productController.getAllProducts
    },
    {
        method: METHOD.GET as keyof Router,
        path: PATH.PRODUCT_ID,
        middleware: [verifyToken],
        handler: productController.getOneProduct,
    },
    {
        method: METHOD.POST as keyof Router,
        path: PATH.PRODUCTS,
        middleware: [verifyToken],
        handler: productController.createProduct,
    },
    {
        method: METHOD.PATCH as keyof Router,
        path: PATH.EDIT_PRODUCT_ID,
        middleware: [verifyToken],
        handler: productController.updateProduct,
    },
    {
        method: METHOD.DELETE as keyof Router,
        path: PATH.PRODUCT_ID,
        middleware: [verifyToken],
        handler: productController.deleteProduct
    }
]

productRoutes.forEach((route) => {
    const { method, path, middleware = [], handler } = route;
    router[method as any](path, middleware, handler);
});

export default router;