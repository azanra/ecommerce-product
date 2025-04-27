export default class Controller {
  #cart;
  decrementBtn = document.querySelector(".decrementAction");
  incrementBtn = document.querySelector(".incrementAction");
  amountCart = document.querySelector(".amountCartText");
  constructor(cart) {
    this.#cart = cart;
  }
  static getTheItemId(element) {
    const parentId = element.parentNode.id;
    const parentArr = parentId.split("-");
    const itemId = parentArr[1];
    return Number(itemId);
  }
  incrementAmountListener() {
    this.incrementBtn.addEventListener("click", () => {
      const itemId = Controller.getTheItemId(this.incrementBtn);
      this.#cart.incrementProduct(itemId);
      this.amountCart.textContent = this.#cart.returnItemAmount(itemId);
    });
  }
}
