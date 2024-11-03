import { Request, Response, NextFunction } from "../../interface";
import { ErrorHandler, SuccessHandler } from "../../utils";
import * as productService from "../product/service";
import { uploadImage } from "../../utils";
import { cloudinary } from '../../config';

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
    const image = await uploadImage(req.files as Express.Multer.File[], []);
    const data = await productService.create(
        {
            ...req.body,
            image: image
        }
    );

    return SuccessHandler(res, "Product successfully created", data);
}

const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
    const product = await productService.getById(req.params.id)
    const oldImage = Array.isArray(product?.image) ? product.image.map((i) => i?.public_id) : [];

    const image = await uploadImage(req.files as Express.Multer.File[], oldImage);
    const data = await productService.updateById(
        req.params.id,
        {
            ...req.body,
            image: image
        }
    );

    return SuccessHandler(res, "Product updated successfully", data);
}

const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
    const data = await productService.deletById(req.params.id);
    const productImage = Array.isArray(data?.image) ? data.image.map((i) => i?.public_id) : [];
    await cloudinary.api.delete_resources(productImage)
    return !data ? new ErrorHandler("Product not found") : SuccessHandler(res, "Product deleted successfully", data);
}

export default {
    getAllProducts,
    getOneProduct,
    createProduct,
    updateProduct,
    deleteProduct
}