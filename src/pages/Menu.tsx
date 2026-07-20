import { useState } from "react";
import type { MenuCategoryId } from "../types/menu";
import PageLoadGate from "../components/PageLoadGate";
import PageMeta from "../components/PageMeta";
import MenuHero from "../components/menu/MenuHero";
import CategoryTab from "../components/menu/CategoryTab";
import ProductGrid from "../components/menu/ProductGrid";
import { pageSeo } from "../data/seo";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<MenuCategoryId>("all");

  return (
    <PageLoadGate className="w-full bg-[#F7F6F0] text-[#2F490C]">
      <PageMeta seo={pageSeo.menu} />
      <section className="space-y-10 px-4 py-16 lg:px-10 xl:px-20 2xl:px-32 2xl:py-24">
        <MenuHero />
        <CategoryTab
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />
        <ProductGrid activeCategory={activeCategory} />
      </section>
    </PageLoadGate>
  );
}
