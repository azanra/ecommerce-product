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
    return Number(itemId);
  }
  incrementAmountListener() {
    this.incrementBtn.addEventListener("click", () => {
      const parentId = this.incrementBtn.parentNode.id;
      const itemId = Controller.getTheItemId(parentId);
      this.#cart.incrementProduct(itemId);
      this.amountCart.textContent = this.#cart.returnItemAmount(itemId);
    });
  }
}
