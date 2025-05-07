import Controller from "./controller/controller.js";
import Cart from "./model/cart.js";
import { data } from "./model/data.js";
import Shoes from "./model/shoes.js";

const shoesData = data[0];
const firstShoes = new Shoes(
  shoesData.id,
  shoesData.name,
  shoesData.description,
  shoesData.originalPrice,
  shoesData.discount,
  shoesData.images
);

const cart = new Cart();
cart.addToTheCart(firstShoes);

const homeImage = {
  largeImage: ".largeProductImage",
  thumbnailImage: ".thumbImgContainer",
};

const modalImage = {
  largeImage: ".modalPictureContainer",
  thumbnailImage: ".modalThumbnail",
};

const controller = new Controller(cart);
controller.incrementAmountListener();
controller.decrementAmountListener();
controller.addToTheCartListener();
controller.thumbnailListener(homeImage.largeImage, homeImage.thumbnailImage);
controller.thumbnailListener(modalImage.largeImage, modalImage.thumbnailImage);
controller.imageSwapListener();
controller.modalListener();
controller.headerCartBtnListener();
