// create a camera rental app

// first create an array of cameras // done
type CameraBrand = "Canon" | "Nikon" | "Sony" | "Fujifilm";

type Camera = {
    _id: number;
    name: string;
    price: number;
    brand: CameraBrand;
}

type CameraList = Array<Camera>;

let cameraId: number = 1;
const cameras: CameraList = [
    {
        _id: cameraId++,
        name: 'Canon EOS 5D Mark IV',
        price: 2499.99,
        brand: 'Canon',
    },
    {
        _id: cameraId++,
        name: 'Nikon D850',
        price: 2999.99,
        brand: 'Nikon',
    },
    {
        _id: cameraId++,
        name: 'Sony Alpha 7 III',
        price: 1999.99,
        brand: 'Sony',
    }
];

// create a add camera function  
function addCamera(camera: Camera): void {
    cameras.push(camera);
}

const newCamera: Camera = {
    _id: cameraId++,
    name: 'Fujifilm X-T4',
    price: 1799.99,
    brand: 'Fujifilm',
}

addCamera(newCamera);


// create a find camera function
function findOneCamera(Id: number): Camera | undefined {
    return cameras.find((c) => c._id === Id);
}
findOneCamera(newCamera._id)


//create a function that finds multiple camera
function findMultipleCamera(Id: Array<number>): Camera[] {
    return cameras.filter((c) => Id.includes(c._id));
}
const cameraIds = cameras.map((c) => c._id);
findMultipleCamera(cameraIds);

// create a add cart where it adds the camera to the cart
type CameraCart = Array<Camera>;
const cartCamera: CameraCart = [];

function addCart(Id: Array<number>): void {
    const rentedCameras = cameras.filter((c) => Id.includes(c._id));
    cartCamera.push(...rentedCameras);
}

addCart(cameraIds);

// create a checkoutcamera function that checks out the camera
type CameraOrder = {
    _id: number;
    cart: CameraCart;
    status: string;
    amount: number;
}

type CameraQueue = Array<CameraOrder>;
const cameraQueue: CameraQueue = [];

let cameraOrderId = 1;
function cameraCheckout(cartCamera: CameraCart): CameraOrder {
    const cameraTotal = cartCamera.reduce((total, camera) => total + camera.price, 0);

    const cameraOrder: CameraOrder = {
        _id: cameraOrderId++,
        cart: cartCamera,
        status: 'pending',
        amount: cameraTotal,
    }

    cameraQueue.push(cameraOrder);
    return cameraOrder;
}

const availCamera = cameraCheckout(cartCamera);
console.log(availCamera);

// create a remove camera function that removes the camera from the cart
function removeOne(Id: number): void {
    const index = cartCamera.findIndex((c) => c._id === Id);
    if (index > -1) {
        cartCamera.splice(index, 1);
    }
}
// create a clear cart function that clears the cart
function clearCart(): void {
    cartCamera.length = 0;
}

console.log(cameraQueue);

// create a update rental function that updates the rental status
function updateRental(Id: number): CameraOrder {    
    const cameraQue = cameraQueue.find((c) => c._id === Id);
    cameraQue.status = 'completed';
    return cameraQue;

}

console.log(updateRental(1));   



