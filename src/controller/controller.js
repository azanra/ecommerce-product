import Element from "../view/element.js";

export default class Controller {
  #cart;
  decrementBtn = document.querySelector(".decrementAction");
  incrementBtn = document.querySelector(".incrementAction");
  amountCart = document.querySelector(".amountCartText");
  addToCartBtn = document.querySelector(".addToCartBtn");
  nextBtn = document.querySelector(".nextBtn");
  previousBtn = document.querySelector(".previousBtn");
  headerCartAmount = document.querySelector("#headerCartAmount");
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
  headerCartBtnListener() {
    const headerCartBtn = document.querySelector("#headerCartBtn");
    headerCartBtn.addEventListener("click", () => {
      Element.removeElement(".cartContainer");
      this.cartView.createCartContainer(this.#cart.cart);
      this.removeItemListener();
      this.checkoutListener();
      this.exitCartBtnListener();
    });
  }
  exitCartBtnListener() {
    const exitCartBtn = document.querySelector("#cartExitBtn");
    exitCartBtn.addEventListener("click", () => {
      Element.removeElement(".cartContainer");
    });
  }
  addToTheCartListener() {
    this.addToCartBtn.addEventListener("click", () => {
      this.headerCartAmount.textContent = this.#cart.returnAllItemAmount();
      this.headerCartAmount.style.background = "orange";
      this.headerCartAmount.style.color = "white";
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
        this.headerCartAmount.style.background = "white";
        this.headerCartAmount.style.color = "white";
      });
    });
  }
  thumbnailListener(largeImageElement, thumbnailImageElement) {
    const largeProductImage = document.querySelector(largeImageElement);
    const thumbnailImage = document.querySelectorAll(thumbnailImageElement);
    thumbnailImage.forEach((item) => {
      item.addEventListener("click", () => {
        //TODO
        //Changing the image from the url in webpack doesn't work since it hash the name by default
        //and the image that will be used for large image is a thumbnail image causing the blurred large image
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
  modalListener() {
    const largeImage = document.querySelector("#largeImage");
    const dialog = document.querySelector(".dialogContainer");
    largeImage.addEventListener("click", () => {
      dialog.showModal();
      this.modalCloseListener(dialog);
    });
  }
  modalCloseListener(dialog) {
    const cancelBtn = document.querySelector(".cancelBtn");
    cancelBtn.addEventListener("click", () => {
      dialog.close();
    });
  }
  checkoutListener() {
    const cartBody = document.querySelector(".cartBody");
    const checkoutBtn = document.querySelector("#checkoutButton");
    checkoutBtn.addEventListener("click", () => {
      this.#cart.resetAllAmount();
      Element.removeAllItem();
      this.amountCart.textContent = "0";
      this.headerCartAmount.textContent = "";
      this.headerCartAmount.style.background = "white";
      this.headerCartAmount.style.color = "orange";
      cartBody.style.padding = "50px 100px";
      cartBody.textContent = "Your cart is empty";
      cartBody.style.color = "hsl(219, 9%, 45%)";
    });
  }
}
