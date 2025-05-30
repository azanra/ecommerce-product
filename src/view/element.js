import { attribute } from "./attribute.js";

export default class Element {
  static createElement(attribute, uniqueId) {
    const parentElement = Element.referenceParent(attribute, uniqueId);
    const newElement = document.createElement(attribute.element);
    Element.setTextContent(newElement, attribute.textContent);
    const newAttribute = Element.setUniqueId(attribute, uniqueId);
    Element.setAttribute(newElement, newAttribute.attributeElement);
    parentElement.append(newElement);
  }

  static setAttribute(newElement, attribute) {
    for (const key in attribute) {
      if (key === "id" && attribute.uniqueId !== undefined) {
        newElement.setAttribute(key, `${attribute[key]}-${attribute.uniqueId}`);
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

  static setUniqueId(attribute, uniqueId) {
    let newAttribute = JSON.parse(JSON.stringify(attribute));
    if (uniqueId !== undefined) {
      newAttribute.attributeElement.id = `${newAttribute.attributeElement.id}-${uniqueId}`;
      return newAttribute;
    } else {
      return newAttribute;
    }
  }

  static referenceParent(attribute, uniqueId) {
    if (attribute.uniqueParent === true) {
      return document.querySelector(`${attribute.parent}-${uniqueId}`);
    } else {
      return document.querySelector(attribute.parent);
    }
  }

  static appendSrcAttribute(attribute, srcAttr) {
    attribute.src = srcAttr;
  }

  static appendText(attribute, text) {
    attribute.textContent = text;
  }

  static removeElement(inputtedElement) {
    const element = document.querySelector(inputtedElement);
    if (element) {
      element.remove();
    }
  }

  static removeAllItem() {
    const itemContainer = document.querySelectorAll(".itemContainer");
    itemContainer.forEach((item) => {
      if (item) {
        item.remove();
      }
    });
  }

  createCartContainer(cart) {
    Element.createElement(attribute.cartContainer);
    Element.createElement(attribute.cartHeader);
    Element.createElement(attribute.cartExit);
    Element.createElement(attribute.cartBody);
    if (cart.length > 0) {
      cart.map((item) => {
        Element.createElement(attribute.itemContainer, item.id);
        Element.createElement(attribute.imageContainer, item.id);
        Element.appendSrcAttribute(
          attribute.productImage.attributeElement,
          item.images[0].thumbnail
        );
        Element.createElement(attribute.productImage, item.id);
        Element.createElement(attribute.infoContainer, item.id);
        Element.appendText(attribute.productName, item.name);
        Element.createElement(attribute.productName, item.id);
        Element.createElement(attribute.priceContainer, item.id);
        Element.appendText(attribute.productPrice, `$${item.currentPrice}.00`);
        Element.createElement(attribute.productPrice, item.id);
        Element.appendText(attribute.productAmount, ` x ${item.amount}`);
        Element.createElement(attribute.productAmount, item.id);
        Element.appendText(
          attribute.productTotalPrice,
          ` $${item.totalPrice}.00`
        );
        Element.createElement(attribute.productTotalPrice, item.id);
        Element.createElement(attribute.removeContainer, item.id);
        Element.createElement(attribute.removeButton, item.id);
      });
    }
    Element.createElement(attribute.checkoutContainer);
    Element.createElement(attribute.checkoutButton);
  }
}
