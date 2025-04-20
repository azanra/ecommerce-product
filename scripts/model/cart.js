export default class Cart {
  #cart;
  constructor() {
    this.#cart = [];
  }
  get cart() {
    return this.#cart;
  }
}
