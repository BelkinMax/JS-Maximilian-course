/* ----------------------------------- OOP ---------------------------------- */

// Single product info
class Product {
  // id = 0000;
  // title = "TITLE";
  // imageUrl = "#";
  // description = "DESCRIPTION";
  // price = 0;

  constructor(id, title, img, desc, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = img;
    this.description = desc;
    this.price = price;
  }
}

// Product render logic
class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    console.log("adding to cart");
    console.log(this.product);
  }

  render() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
      <div>
        <img src="${this.product.imageUrl}" alt="${this.product.title}">
        <div class="product-item__content">
          <h2>${this.product.title}</h2>
          <h3>\$${this.product.price}</h3>
          <p>${this.product.description}</p>
          <button>Add to Cart</button>
        </div>
      </div>
    `;
    const addCartButton = prodEl.querySelector("button");
    addCartButton.addEventListener("click", this.addToCart.bind(this));
    return prodEl;
  }
}

// Product list
class ProductList {
  products = [
    new Product(
      0001,
      "Pillow",
      "/assets/img/pillow.jpg",
      "A soft pillow.",
      19.99
    ),
    new Product(
      0002,
      "Carpet",
      "/assets/img/carpet.jpg",
      "A carpet which you might like - or not.",
      69.99
    ),
  ];

  constructor() {}

  render() {
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    return prodList;
  }
}

// Shopping cart
class ShoppingCart {
  items = [];

  render() {
    const cartEl = document.createElement("section");
    cartEl.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order Now!</button>
    `;
    cartEl.className = "cart";
    return cartEl;
  }
}

// Shop
class Shop {
  render() {
    const renderHook = document.getElementById("app");
    const cart = new ShoppingCart();
    const cartEl = cart.render();
    const productList = new ProductList();
    const prodListEl = productList.render();

    renderHook.append(cartEl);
    renderHook.append(prodListEl);
  }
}

const shop = new Shop();
shop.render();