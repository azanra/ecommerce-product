export default class Controller {
  #cart;
  decrementBtn = document.querySelector(".decrementAction");
  incrementBtn = document.querySelector(".incrementAction");
  amountCart = document.querySelector(".amountCartText");
  constructor(cart) {
    this.#cart = cart;
  }
  static getTheItemId(parentId) {
    const parentArr = parentId.split("-");
    const itemId = parentArr[1];
    return itemId;
  }
}
