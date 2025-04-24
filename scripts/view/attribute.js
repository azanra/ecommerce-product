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
    uniqueParent: false,
  },
  imageContainer: {
    parent: "#itemContainer",
    element: "div",
    attributeElement: {
      class: "imageContainer",
      id: "imageContainer",
    },
    uniqueParent: true,
  },
  productImage: {
    parent: "#imageContainer",
    element: "img",
    attributeElement: {
      class: "productImage",
      id: "productImage",
    },
    uniqueParent: true,
  },
  infoContainer: {
    parent: "#itemContainer",
    element: "div",
    attributeElement: {
      class: "infoContainer",
      id: "infoContainer",
    },
    uniqueParent: true,
  },
  productName: {
    parent: "#infoContainer",
    element: "p",
    attributeElement: {
      class: "productName",
      id: "productName",
    },
    uniqueParent: true,
  },
};
