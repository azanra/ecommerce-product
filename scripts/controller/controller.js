import Element from "../view/element.js";

export default class Controller {
  #cart;
  decrementBtn = document.querySelector(".decrementAction");
  incrementBtn = document.querySelector(".incrementAction");
  amountCart = document.querySelector(".amountCartText");
  addToCartBtn = document.querySelector(".addToCartBtn");
  cartView = new Element();
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
  decrementAmountListener() {
    this.decrementBtn.addEventListener("click", () => {
      const itemId = Controller.getTheItemId(this.decrementBtn);
      this.#cart.decrementProduct(itemId);
      this.amountCart.textContent = this.#cart.returnItemAmount(itemId);
    });
  }
  addToTheCartListener() {
    this.addToCartBtn.addEventListener("click", () => {
      Element.removeElement(".cartContainer");
      this.cartView.createCartContainer(this.#cart.cart);
      this.removeItemListener();
    });
  }
  removeItemListener() {
    const removeBtn = document.querySelectorAll(".removeButton");
    removeBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        const itemId = Controller.getTheItemId(btn);
        this.#cart.removeFromTheCart(itemId);
        Element.removeAllItem();
        Element.setTextContent(this.amountCart, "0");
      });
    });
  }
}
