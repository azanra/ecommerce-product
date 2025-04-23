import { attribute } from "./attribute.js";

export default class Element {
  static createElement(attribute) {
    const parentElement = document.querySelector(attribute.parent);
    const newElement = document.createElement(attribute.element);
    Element.setTextContent(newElement, attribute.textContent);
    Element.setAttribute(newElement, attribute.attributeElement);
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
    Element.createElement(attribute.cartContainer);
    Element.createElement(attribute.cartHeader);
    Element.createElement(attribute.cartBody);
    if (cart.length > 0) {
      cart.map((item) => {});
    }
  }
}
