export const attribute = {
  cartContainer: {
    parent: ".cart",
    element: "div",
    attributeElement: {
      class: "cartContainer",
    },
    uniqueParent: false,
  },
  cartHeader: {
    parent: ".cartContainer",
    element: "div",
    attributeElement: {
      class: "cartHeader",
    },
    uniqueParent: false,
  },
  cartBody: {
    parent: ".cartContainer",
    element: "div",
    attributeElement: {
      class: "cartBody",
    },
    uniqueParent: false,
  },
  itemContainer: {
    parent: ".cartBody",
    element: "div",
    attributeElement: {
      class: "itemContainer",
      id: "itemContainer",
    },
    uniqueParent: true,
  },
};
