class Element {
  constructor(parentElement, element, attribute, textContent, uniqueId) {
    this.parentElement = parentElement;
    this.element = element;
    this.attribute = attribute;
    this.textContent = textContent;
    this.uniqueId = uniqueId;
  }
  createElement() {
    const parentElement = document.querySelector(this.parentElement);
    const newElement = document.createElement(this.element);
    newElement.textContent = this.textContent;
    parentElement.append(newElement);
  }
}
