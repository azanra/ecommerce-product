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
    this.#cart = this.#cart.filter((item) => item.id !== itemId);
  }
}
