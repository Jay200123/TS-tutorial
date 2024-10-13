let pizzaId = 1;

type Pizza = {
    _id: number;
    name: string;
    price: number;
}

type Menu = Array<Pizza>;

const menu: Menu = [
    {
        _id: pizzaId++,
        name: "Hawaiian",
        price: 10.99,
    },
    {
        _id: pizzaId++,
        name: "Pepperoni",
        price: 12.99,
    },
    {
        _id: pizzaId++,
        name: "Vegetarian",
        price: 8.99,
    }
];

type ID = number;
type Cash = number

let cashInRegister: Cash = 100;
let orderId: ID = 1;

type STATUS = 'pending' | 'completed';

type Que = {
    _id: ID;
    pizza: Pizza;
    status: STATUS;
}

type Order = Array<Que>;
const orderQue: Order = [];


function addPizzaToMenu(pizza: Pizza) {
    return menu.push(pizza);
}


const newPizza: Pizza = {
    _id: pizzaId++,
    name: 'Spinach and Feta',
    price: 15.99,
}

addPizzaToMenu(newPizza);

type PizzaIdentifier = string | number;

export default function getPizzaDetails(identifier: PizzaIdentifier): Pizza | undefined {
    if (typeof identifier === 'number') {
        return menu.find(pizza => pizza._id === identifier);
    } else if (typeof identifier === 'string') {
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase());
    } else {
        throw new Error('Invalid input');
        return;
    }
}


function placeOrder(pizzaName: string): Pizza | Que | undefined {
    const selectedPizza = menu.find(pizza => pizza.name === pizzaName);

    if (!selectedPizza) {
        console.log('Pizza not found');
        return;
    }

    cashInRegister += selectedPizza.price;

    const newOrder: Que = {
        _id: orderId++, pizza: selectedPizza, status: 'pending'
    }
    console.log(newOrder);
    orderQue.push(newOrder);
    return newOrder;

}

function completeOrder(orderId: ID): Order | undefined {
    const order = orderQue.find(order => order._id === orderId);
    if (!order) {
        console.log('Order not found');
        return;
    }
    order.status = 'completed';
    console.log('Order completed');
}

const placedOrder = placeOrder('Hawaiian');
completeOrder(placedOrder._id);
console.log(placedOrder);
console.log(orderQue);


console.log(menu);
