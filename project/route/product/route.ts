import productController from "./controller";
import { METHOD, PATH } from "../../constants";
import { Route, Router } from "../../interface";

const router = Router();

const productRoutes: Route[] = [
    {
        method: METHOD.GET as keyof Router,
        path: PATH.PRODUCTS,
        handler: productController.getAllProducts
    },
    {
        method: METHOD.GET as keyof Router,
        path: PATH.PRODUCT_ID,
        handler: productController.getOneProduct,
    },
    {
        method: METHOD.POST as keyof Router,
        path: PATH.PRODUCTS,
        handler: productController.createProduct,
    },
    {
        method: METHOD.PATCH as keyof Router,
        path: PATH.EDIT_PRODUCT_ID,
        handler: productController.updateProduct,
    },
    {
        method: METHOD.DELETE as keyof Router,
        path: PATH.PRODUCT_ID,
        handler: productController.deleteProduct
    }
]

productRoutes.forEach((route) => {
    const { method, path, handler } = route;
    router[method as any](path, handler);
});

export default router;