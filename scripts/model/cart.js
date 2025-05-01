export default class Cart {
  #cart;
  constructor() {
    this.#cart = [];
  }
  get cart() {
    return this.#cart;
  }
  set cart(value) {
    this.#cart = value;
  }
  addToTheCart(item) {
    this.#cart.push(item);
  }
  removeFromTheCart(itemId) {
    this.#cart.map((item) => {
      if (item.id === itemId) {
        item.amount = 0;
      }
    });
  }
  incrementProduct(itemId) {
    this.#cart.map((item) => {
      if (item.id === itemId) {
        item.amount = ++item.amount;
      }
    });
  }
  decrementProduct(itemId) {
    this.#cart.map((item) => {
      if (item.id === itemId && item.amount > 0) {
        item.amount = --item.amount;
      } else {
        alert("Cant be negative!");
      }
    });
  }
  returnItemAmount(itemId) {
    let amount;
    this.#cart.map((item) => {
      if (item.id === itemId) {
        amount = item.amount;
      }
    });
    return amount;
  }
  returnProductImages(itemId) {
    let images;
    this.#cart.map((item) => {
      if (item.id === itemId) {
        images = item.images;
      }
    });
    return images;
  }
  resetAllAmount() {
    this.#cart.map((item) => {
      item.amount = 0;
    });
  }
}
