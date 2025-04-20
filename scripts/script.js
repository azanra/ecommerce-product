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

console.log(firstShoes);
console.log(firstShoes.amount);

console.log((firstShoes.amount = 3));

console.log(firstShoes.currentPrice);

console.log(firstShoes.totalPrice);
