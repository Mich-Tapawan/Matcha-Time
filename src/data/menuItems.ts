import type { MenuCategory, MenuItem } from "../types/menu";
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

export const menuCategories: MenuCategory[] = [
  { id: "all", label: "All Whisks" },
  { id: "ceremonial", label: "Pure & Ceremonial" },
  { id: "lattes", label: "Signature Lattes" },
  { id: "sparklers", label: "Sparklers & Coolers" },
  { id: "desserts", label: "Artisanal Desserts" },
];

export const menuItems: MenuItem[] = [
  {
    id: "ceremonial-koicha",
    name: "Ceremonial Koicha Shot",
    price: 7,
    description:
      "Thick, jewel-toned Uji matcha whisked with mineral water for a pure first sip.",
    imageURL: matchaShot,
    category: "ceremonial",
  },
  {
    id: "usucha-classic",
    name: "Usucha Classic",
    price: 6,
    description:
      "Light ceremonial-grade matcha prepared in the traditional thin tea style.",
    imageURL: matchaColdBrew,
    category: "ceremonial",
  },
  {
    id: "black-sesame-matcha",
    name: "Black Sesame Matcha",
    price: 8,
    description:
      "Stone-ground matcha folded with toasted black sesame and steamed milk.",
    imageURL: blackSesameMatcha,
    category: "ceremonial",
  },
  {
    id: "matcha-espresso-fusion",
    name: "Matcha Espresso Fusion",
    price: 8,
    description:
      "A balanced meeting of ceremonial matcha and a single espresso pull.",
    imageURL: matchaEspressoFusion,
    category: "ceremonial",
  },
  {
    id: "iced-matcha-latte",
    name: "Iced Matcha Latte",
    price: 8,
    description:
      "Ceremonial matcha shaken over ice with your choice of milk for daily calm.",
    imageURL: icedMatchaLatte,
    category: "lattes",
  },
  {
    id: "pink-dawn",
    name: "Pink Dawn Latte",
    price: 8,
    description:
      "Matcha layered with strawberry puree, hibiscus syrup, and soft vanilla.",
    imageURL: pinkDawn,
    category: "lattes",
  },
  {
    id: "dirty-matcha",
    name: "Dirty Matcha Latte",
    price: 8,
    description:
      "Ceremonial matcha and espresso swirled through chilled milk and ice.",
    imageURL: dirtyMatcha,
    category: "lattes",
  },
  {
    id: "matcha-affogato",
    name: "Matcha Affogato",
    price: 9,
    description:
      "Warm whisked matcha poured over vanilla ice cream with cookie crumble.",
    imageURL: matchaAffogato,
    category: "lattes",
  },
  {
    id: "mango-coconut-sparkler",
    name: "Mango Coconut Sparkler",
    price: 8,
    description:
      "Bright matcha lifted with mango, coconut water, and sparkling finish.",
    imageURL: mangoCoconutMatchaSparkler,
    category: "sparklers",
  },
  {
    id: "matcha-tonic",
    name: "Citrus Matcha Tonic",
    price: 8,
    description:
      "Matcha and citrus juice lengthened with tonic over crystal ice.",
    imageURL: matchaTonic,
    category: "sparklers",
  },
  {
    id: "matcha-strawberry-crepe",
    name: "Matcha Strawberry Crepe",
    price: 10,
    description:
      "Delicate matcha crepe filled with fresh strawberries and whipped cream.",
    imageURL: matchaStrawberryCrepe,
    category: "desserts",
  },
  {
    id: "matcha-cheesecake",
    name: "Matcha Cheesecake",
    price: 10,
    description:
      "Silky matcha cream cheese over a buttery graham crust, sliced to share.",
    imageURL: matchaCheeseCake,
    category: "desserts",
  },
  {
    id: "matcha-tiramisu",
    name: "Matcha Tiramisu Cup",
    price: 10,
    description:
      "Mascarpone, espresso-kissed ladyfingers, and a fine matcha dusting.",
    imageURL: matchaTiramisuCup,
    category: "desserts",
  },
  {
    id: "matcha-mochi",
    name: "Matcha Mochi",
    price: 9,
    description:
      "Chewy sweet rice filled with matcha cream and soft red bean.",
    imageURL: matchaMochi,
    category: "desserts",
  },
  {
    id: "matcha-lava-cookie",
    name: "Matcha Lava Cookie",
    price: 9,
    description:
      "Warm matcha cookie with a molten ceremonial center that runs green.",
    imageURL: matchaLavaCookie,
    category: "desserts",
  },
  {
    id: "white-chocolate-brownie",
    name: "White Chocolate Matcha Brownie",
    price: 9,
    description:
      "Fudgy matcha brownie studded with white chocolate, cut into generous squares.",
    imageURL: whiteChocolateMatchaBrownie,
    category: "desserts",
  },
];
