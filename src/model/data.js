import largeFirstImg from "../assets/images/image-product-1.jpg";
import thumbFirstImg from "../assets/images/image-product-1-thumbnail.jpg";
import largeSecondImg from "../assets/images/image-product-2.jpg";
import thumbSecondImg from "../assets/images/image-product-2-thumbnail.jpg";
import largeThirdImg from "../assets/images/image-product-3.jpg";
import thumbThirdImg from "../assets/images/image-product-3-thumbnail.jpg";
import largeFourthImg from "../assets/images/image-product-4.jpg";
import thumbFourthImg from "../assets/images/image-product-4-thumbnail.jpg";

export const data = [
  {
    id: 0,
    name: "Fall Limited Edition Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer",
    originalPrice: 250,
    discount: "50%",
    images: [
      {
        original: largeFirstImg,
        thumbnail: thumbFirstImg,
      },
      {
        original: largeSecondImg,
        thumbnail: thumbSecondImg,
      },
      {
        original: largeThirdImg,
        thumbnail: thumbThirdImg,
      },
      {
        original: largeFourthImg,
        thumbnail: thumbFourthImg,
      },
    ],
  },
];
