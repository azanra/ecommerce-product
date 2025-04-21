export default class Cart {
  #cart;
  constructor() {
    this.#cart = [];
  }
  get cart() {
    return this.#cart;
  }
  addToTheCart(item) {
    this.#cart.push(item);
  }
  removeFromTheCart(itemId) {
    this.#cart.filter((item) => item.id !== itemId);
  }
  incrementProduct(itemId) {
    this.#cart.map((item) => {
      if (item.id === itemId) {
        item.amount = ++item.amount;
      }
    });
  }
}
