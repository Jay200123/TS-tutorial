const list1 = [1, 2, 3, 4, 5];
list1.push(6);
console.log(list1)

const list2 = ["John", "Jane", "Doe"];
list2.push("Smith");
console.log(list2)

type Product = {
    name: string,
    price: number,
}

type Item = Array<Product>;
const items: Item = [];

function addItemToCart(product: Product) {
    return items.push(product);
}

addItemToCart({ name: 'Milk', price: 2.99 });
console.log(items); 
