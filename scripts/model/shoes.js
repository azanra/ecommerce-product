export default class Shoes {
  #amount;
  constructor(id, name, description, originalPrice, discount, images) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.originalPrice = originalPrice;
    this.discount = discount;
    this.images = images;
    this.#amount = 0;
  }
  get amount() {
    return this.#amount;
  }
  set amount(newAmount) {
    this.#amount = newAmount;
  }
  get currentPrice() {
    const PERCENTAGE = 100;
    const discountPercentage = parseFloat(this.discount) / PERCENTAGE;
    return discountPercentage * this.originalPrice;
  }
  get totalPrice() {
    return this.#amount * this.currentPrice;
  }
}
