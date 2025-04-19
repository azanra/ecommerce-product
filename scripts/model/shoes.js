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
}
