import type { ProductType } from "../types/product";
import icedMatchaLatte from "../assets/showcase/recommended/iced-matcha-latte.webp";
import pinkDawn from "../assets/showcase/recommended/pink-dawn.webp";
import dirtyMatcha from "../assets/showcase/recommended/dirty-matcha.webp";
import matchaShot from "../assets/showcase/recommended/matcha-shot.webp";
import matchaTonic from "../assets/showcase/recommended/matcha-tonic.webp";
import matchaAffogato from "../assets/showcase/recommended/matcha-affogato.webp";
import matchaStrawberryCrepe from "../assets/showcase/recommended/matcha-strawberry-crepe.webp";
import matchaCheeseCake from "../assets/showcase/recommended/matcha-cheese-cake.webp";
import mangoCoconutMatchaSparkler from "../assets/showcase/popular/mango-coconut-matcha-sparkler.webp";
import matchaTiramisuCup from "../assets/showcase/popular/matcha-tiramisu-cup.webp";
import blackSesameMatcha from "../assets/showcase/popular/black-sesame-matcha.webp";
import matchaColdBrew from "../assets/showcase/popular/matcha-cold-brew.webp";
import matchaMochi from "../assets/showcase/popular/matcha-mochi.webp";
import matchaLavaCookie from "../assets/showcase/popular/matcha-lava-cookie.webp";
import whiteChocolateMatchaBrownie from "../assets/showcase/popular/white-chocolate-matcha-brownie.webp";
import matchaEspressoFusion from "../assets/showcase/popular/matcha-espresso-fusion.webp";

export const recommendedItems: ProductType[] = [
  {
    imageURL: icedMatchaLatte,
    name: "Iced Matcha Latte",
    price: 8,
    description: "ceremonial matcha, milk, ice",
  },
  {
    imageURL: pinkDawn,
    name: "Pink Dawn",
    price: 8,
    description: "matcha, milk, strawberry puree, hibiscus syrup, vanilla",
  },
  {
    imageURL: dirtyMatcha,
    name: "Dirty Matcha",
    price: 8,
    description: "matcha, espresso, milk, ice",
  },
  {
    imageURL: matchaShot,
    name: "Matcha Shot",
    price: 6,
    description: "ceremonial-grade matcha, whisked to order",
  },
  {
    imageURL: matchaTonic,
    name: "Matcha Tonic",
    price: 8,
    description: "matcha, citrus juice, tonic, ice",
  },
  {
    imageURL: matchaAffogato,
    name: "Matcha Affogato",
    price: 9,
    description: "matcha, vanilla ice cream, cookie crumble",
  },
  {
    imageURL: matchaStrawberryCrepe,
    name: "Matcha Strawberry Crepe",
    price: 10,
    description: "matcha crepe, fresh strawberries, whipped cream",
  },
  {
    imageURL: matchaCheeseCake,
    name: "Matcha Cheesecake",
    price: 10,
    description: "matcha, cream cheese, graham crust",
  },
];

export const popularItems: ProductType[] = [
  {
    imageURL: mangoCoconutMatchaSparkler,
    name: "Mango Coconut Matcha Sparkler",
    price: 8,
    description: "matcha, mango, coconut, sparkling water",
  },
  {
    imageURL: matchaTiramisuCup,
    name: "Matcha Tiramisu Cup",
    price: 10,
    description: "matcha, mascarpone, espresso, ladyfingers",
  },
  {
    imageURL: blackSesameMatcha,
    name: "Black Sesame Matcha",
    price: 8,
    description: "matcha, black sesame, milk",
  },
  {
    imageURL: matchaColdBrew,
    name: "Matcha Cold Brew",
    price: 8,
    description: "matcha, cold brew coffee, ice",
  },
  {
    imageURL: matchaMochi,
    name: "Matcha Mochi",
    price: 9,
    description: "matcha, sweet rice flour, red bean",
  },
  {
    imageURL: matchaLavaCookie,
    name: "Matcha Lava Cookie",
    price: 9,
    description: "matcha cookie, molten matcha center",
  },
  {
    imageURL: whiteChocolateMatchaBrownie,
    name: "White Chocolate Matcha Brownie",
    price: 9,
    description: "matcha, white chocolate, brownie batter",
  },
  {
    imageURL: matchaEspressoFusion,
    name: "Matcha Espresso Fusion",
    price: 8,
    description: "matcha, espresso, milk",
  },
];
