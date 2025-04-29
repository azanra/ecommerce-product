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
    this.#cart = this.#cart.filter((item) => item.id !== itemId);
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
}
