export default class Element {
  constructor(parentElement, element, attribute, textContent) {
    this.parentElement = parentElement;
    this.element = element;
    this.attribute = attribute;
    this.textContent = textContent;
  }
  createElement(uniqueId) {
    const parentElement = document.querySelector(this.parentElement);
    const newElement = document.createElement(this.element);
    this.setTextContent(newElement);
    this.setAttribute(newElement, uniqueId);
    parentElement.append(newElement);
  }
  setAttribute(newElement, uniqueId) {
    for (const key in this.attribute) {
      if (key === "id" && uniqueId !== undefined) {
        newElement.setAttribute(key, `${this.attribute[key]}-${uniqueId}`);
      } else {
        newElement.setAttribute(key, this.attribute[key]);
      }
    }
  }
  setTextContent(element) {
    if (this.textContent !== undefined) {
      element.textContent = this.textContent;
    }
  }
}
