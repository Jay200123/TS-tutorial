import { Request, Response, NextFunction } from "../../interface";
import { ErrorHandler, SuccessHandler } from "../../utils";
import * as productService from "../product/service";

const getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
    const data = await productService.getAll();
    return !data ? new ErrorHandler("Products not found")
        : SuccessHandler(res, "Products Found", data);
}

const getOneProduct = async (req: Request, res: Response, next: NextFunction) => {
    const data = await productService.getById(req.params.id);
    return !data ? new ErrorHandler("Product not Found")
        : SuccessHandler(res, "Product Found", data)
}

const createProduct = async (req: Request, res: Response, next: NextFunction) => {
    const data = await productService.create(
        {
            ...req.body
        }
    );

    return SuccessHandler(res, "Product successfully created", data);
}

const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
    const data = await productService.updateById(
        req.params.id,
        {
            ...req.body
        }
    );

    return SuccessHandler(res, "Product updated successfully", data);
}

const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
    const data = await productService.deletById(req.params.id);
    return !data ? new ErrorHandler("Product not found") : SuccessHandler(res, "Product deleted successfully", data);
}

export default {
    getAllProducts,
    getOneProduct,
    createProduct,
    updateProduct,
    deleteProduct
}