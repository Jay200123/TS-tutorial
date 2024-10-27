import { IProduct, Schema, model } from "../../interface";
import { RESOURCE } from "../../constants";

const productSchema: Schema<IProduct> = new Schema({
    product_name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    image: [
        {
            public_id: String,
            url: String,
            originalname: String
        }
    ],

})

const Product = model<IProduct>(RESOURCE.PRODUCT, productSchema);
export default Product