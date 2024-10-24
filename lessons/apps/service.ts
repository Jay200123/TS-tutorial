type Service = {
    _id: number;
    name: string;
    price: number;
}

type Choice = Array<Service>;

let serviceId: number = 1;

const choices: Choice = [
    {
        _id: serviceId++,
        name: 'Printer Troubleshoot',
        price: 100.00,
    },
    {
        _id: serviceId++,
        name: 'Hardware Installation',
        price: 200.00,
    },
    {
        _id: serviceId++,
        name: 'Software Installation',
        price: 300.00,
    }
]

const serviceIds = choices.map((s) => s._id);

const findServices = (service: Array<number>): Service[] => {
    return choices.filter((s) => service.includes(s._id));
}

const services = findServices(serviceIds);

type ServiceCart = Array<Service>;
const serviceCart: ServiceCart = [];

const addServiceCart = (service: Array<number>) => {
    const services = choices.filter((s) => service.includes(s._id));
    if (!service || service.length === 0) {
        throw new Error('Service is not available');
    }
    serviceCart.push(...services);

    return services;
}

const serviceResult = addServiceCart(serviceIds);

let serviceOrderId = 1;

type ServiceOrder = {
    _id: number;
    cart: ServiceCart;
    status: string;
    amount: number;
}

type ServiceQue = Array<ServiceOrder>;
const serviceOrders: ServiceQue = [];


const serviceCheckout = (cart: ServiceCart) => {
    const serviceTotal = cart.reduce((total, service) => total + service.price, 0);

    const serviceOrder: ServiceOrder = {
        _id: serviceOrderId++,
        cart: cart,
        status: 'pending',
        amount: serviceTotal,
    }

    serviceOrders.push(serviceOrder);

    return serviceOrder;
}

const availService = serviceCheckout(serviceResult);
console.log(availService);

const CompleteService = (orderId: number) => {
    const serviceOrder = serviceOrders.find((s) => s._id === orderId);

    if (!serviceOrder) {
        throw new Error('Service order not found');
    }

    serviceOrder.status = 'completed';

    return serviceOrder;
}

console.log(CompleteService(1));