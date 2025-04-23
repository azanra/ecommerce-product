import { attribute } from "./attribute.js";

export default class Element {
  static createElement(parent, element, attribute, textContent) {
    const parentElement = document.querySelector(parent);
    const newElement = document.createElement(element);
    Element.setTextContent(newElement, textContent);
    Element.setAttribute(newElement, attribute);
    parentElement.append(newElement);
  }
  static setAttribute(newElement, attribute) {
    for (const key in attribute) {
      if (key === "id" && uniqueId !== undefined) {
        newElement.setAttribute(key, `${attribute[key]}-${uniqueId}`);
      } else {
        newElement.setAttribute(key, attribute[key]);
      }
    }
  }
  static setTextContent(element, textContent) {
    if (textContent !== undefined) {
      element.textContent = textContent;
    }
  }
  createCartItem(cart) {
    cart.map((item) => {
      Element.createElement(
        attribute.cartContainer.parent,
        attribute.cartContainer.element,
        attribute.cartContainer.attribute
      );
      Element.createElement(
        attribute.cartHeader.parent,
        attribute.cartHeader.element,
        attribute.cartHeader.attribute
      );
      Element.createElement(
        attribute.cartBody.parent,
        attribute.cartBody.element,
        attribute.cartBody.attribute
      );
    });
  }
}
