class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addToCart(product) {
        this.items.push(product);
    }

    removeFromCart(product) {
        const index = this.items.indexOf(product);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }

    showCart() {
        console.log("محصولات در سبد خرید:");
        this.items.forEach((product, index) => {
            console.log(`${index + 1}. ${product.name} - ${product.price} تومان`);
        });
    }
}


const laptop = new Product("لپ‌تاپ ایسوس مدل X123", 20000000);
const phone = new Product("گوشی موبایل سامسونگ مدل S21", 8000000);

const cart = new ShoppingCart();

cart.addToCart(laptop);
cart.addToCart(phone);

cart.showCart();

cart.removeFromCart(laptop);

cart.showCart();
