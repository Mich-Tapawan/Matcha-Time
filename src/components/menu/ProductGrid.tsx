import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { MenuCategoryId, MenuItem } from "../../types/menu";
import { menuItems } from "../../data/menuItems";
import { carouselSlide } from "../motion/variants";

type ProductGridProps = {
  activeCategory: MenuCategoryId;
};

type MenuProductCardProps = {
  item: MenuItem;
};

function MenuProductCard({ item }: MenuProductCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <article className="flex flex-col space-y-3">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#E5E1C1]/20">
        <img
          src={item.imageURL}
          alt={item.name}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      <div className="flex items-start justify-between gap-3">
        <h3 className="brand-font text-base leading-snug text-[#2F490C] md:text-lg">
          {item.name}
        </h3>
        <p className="shrink-0 text-sm font-semibold text-[#8B8F3A] md:text-base">
          ${item.price.toFixed(2)}
        </p>
      </div>

      <p className="line-clamp-2 text-xs leading-relaxed text-[#2F490C]/65 md:text-sm">
        {item.description}
      </p>
    </article>
  );
}

export default function ProductGrid({ activeCategory }: ProductGridProps) {
  const reduceMotion = useReducedMotion();

  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  const gridClassName =
    "grid grid-cols-2 gap-5 md:gap-6 xl:grid-cols-4 xl:gap-8";

  if (reduceMotion) {
    return (
      <ul className={gridClassName}>
        {filteredItems.map((item) => (
          <li key={item.id}>
            <MenuProductCard item={item} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.ul
        key={activeCategory}
        className={gridClassName}
        variants={carouselSlide}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {filteredItems.map((item) => (
          <li key={item.id}>
            <MenuProductCard item={item} />
          </li>
        ))}
      </motion.ul>
    </AnimatePresence>
  );
}
