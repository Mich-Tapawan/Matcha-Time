import type { MenuCategoryId } from "../../types/menu";
import { menuCategories } from "../../data/menuItems";

type CategoryTabProps = {
  activeCategory: MenuCategoryId;
  onChange: (category: MenuCategoryId) => void;
};

export default function CategoryTab({
  activeCategory,
  onChange,
}: CategoryTabProps) {
  return (
    <div className="w-full overflow-x-auto">
      <ul
        className="mx-auto flex w-max max-w-full items-center justify-center gap-2 px-1 md:gap-3 lg:gap-4"
        role="tablist"
        aria-label="Menu categories"
      >
        {menuCategories.map((category) => {
          const isActive = category.id === activeCategory;

          return (
            <li key={category.id} role="presentation">
              <button
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => onChange(category.id)}
                className={`cursor-pointer whitespace-nowrap rounded-full px-4 py-2 text-[0.65rem] font-medium uppercase tracking-[0.16em] transition duration-300 md:px-5 md:text-xs ${
                  isActive
                    ? "bg-[#2F490C] text-white"
                    : "bg-transparent text-[#2F490C]/55 hover:text-[#2F490C]"
                }`}
              >
                {category.label}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
