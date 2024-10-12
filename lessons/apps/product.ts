let productId = 1;
type Brand = "Samsung" | "Oppo" | "Vivo";

type Products = {
    _id: number;
    name: string;
    price: number;
    brand: Brand;
}

type List = Array<Products>;
const lists: List = [];

function addProduct(product: Products) {
    return lists.push(product);
}

const newProduct1: Products = {
    _id: productId++,
    name: 'Samsung Galaxy S21',
    price: 999.99,
    brand: 'Samsung',
}

const newProduct2: Products = {
    _id: productId++,
    name: 'Oppo A74',
    price: 499.99,
    brand: 'Oppo',
}

const newProduct3: Products = {
    _id: productId++,
    name: 'Vivo V21',
    price: 399.99,
    brand: 'Vivo',
}


addProduct(newProduct1);
addProduct(newProduct2);
addProduct(newProduct3);


type Cart = Array<Products>;
const cart: Cart = [];

type IDENTIFIER = number | string;

function findProduct(identifier: IDENTIFIER) {
    return lists.find((p) => p._id === identifier || p?.name === identifier);
}

const result = findProduct(newProduct1?.name);

function addToCart(identifier: IDENTIFIER) {
    const addedProduct = lists.find((p) => p._id === identifier || p?.name === identifier);

    if (!addProduct) {
        throw new Error("Product not found")
    }

    return cart.push(addedProduct);

}

addToCart(newProduct1?._id);

if (!cart || cart.length == 0) {
    throw new Error("Cart is empty");
}

type PHASE = 'pending' | 'completed';

type OrderQue = {
    _id: number;
    cart: Cart;
    status: PHASE;
    amount: number;
};
type PURCHASE = Array<OrderQue>;
const orders: PURCHASE = [];

let purchaseId = 1;

function cartCheckout(cart: Cart) {

    const total = cart.reduce((total, product) => total + product.price, 0);
    const newOrder: OrderQue = {
        _id: purchaseId++,
        cart: cart,
        status: 'pending',
        amount: total
    }

    orders.push(newOrder);
    return newOrder;
}

cartCheckout(cart);

function completedPurchaseOrder(orderId: number) {
    const transaction = orders.find(order => order._id === orderId);

    if (!transaction) {
        throw new Error("Order not found");
    }

    transaction.status = 'completed';

    return transaction;
}

const completed = completedPurchaseOrder(1);
console.log(completed);

