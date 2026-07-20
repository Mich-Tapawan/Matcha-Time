export type MenuCategoryId =
  | "all"
  | "ceremonial"
  | "lattes"
  | "sparklers"
  | "desserts";

export type MenuCategory = {
  id: MenuCategoryId;
  label: string;
};

export type MenuItem = {
  id: string;
  name: string;
  price: number;
  description: string;
  imageURL: string;
  category: Exclude<MenuCategoryId, "all">;
};
