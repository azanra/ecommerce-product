import Element from "../view/element.js";

export default class Controller {
  #cart;
  decrementBtn = document.querySelector(".decrementAction");
  incrementBtn = document.querySelector(".incrementAction");
  amountCart = document.querySelector(".amountCartText");
  addToCartBtn = document.querySelector(".addToCartBtn");
  nextBtn = document.querySelector(".nextBtn");
  previousBtn = document.querySelector(".previousBtn");
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
  thumbnailListener(largeImageElement, thumbnailImageElement) {
    const largeProductImage = document.querySelector(largeImageElement);
    const thumbnailImage = document.querySelectorAll(thumbnailImageElement);
    thumbnailImage.forEach((item) => {
      item.addEventListener("click", () => {
        const thumbnailImage = item.children[0].src;
        const imgUrl = thumbnailImage.replace("-thumbnail", "");
        largeProductImage.children[0].src = imgUrl;
      });
    });
  }
  imageSwapListener() {
    const modalImgContainer = document.querySelector(".modalPictureContainer");
    const SHOES_ID = 0;
    let currentImageIndex = 0;
    const imageAttribute = this.#cart.returnProductImages(SHOES_ID);
    const imageSrc = JSON.parse(JSON.stringify(imageAttribute));
    this.nextBtnListener(currentImageIndex, imageSrc, modalImgContainer);
    this.previousBtnListener(currentImageIndex, imageSrc, modalImgContainer);
  }
  nextBtnListener(currentImageIndex, imageSrc, modalImgContainer) {
    this.nextBtn.addEventListener("click", () => {
      if (currentImageIndex >= 0 && currentImageIndex < 3) {
        modalImgContainer.children[0].src =
          imageSrc[++currentImageIndex].original;
      } else {
        currentImageIndex = 0;
        modalImgContainer.children[0].src =
          imageSrc[currentImageIndex].original;
      }
    });
  }
  previousBtnListener(currentImageIndex, imageSrc, modalImgContainer) {
    this.previousBtn.addEventListener("click", () => {
      if (currentImageIndex > 0 && currentImageIndex <= 3) {
        modalImgContainer.children[0].src =
          imageSrc[--currentImageIndex].original;
      } else {
        currentImageIndex = 3;
        modalImgContainer.children[0].src =
          imageSrc[currentImageIndex].original;
      }
    });
  }
}
