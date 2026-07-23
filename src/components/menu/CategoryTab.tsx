import { useEffect, useRef, useState } from "react";
import type { MenuCategoryId } from "../../types/menu";
import { menuCategories } from "../../data/menuItems";

type CategoryTabProps = {
  activeCategory: MenuCategoryId;
  onChange: (category: MenuCategoryId) => void;
};

type DragState = {
  isDragging: boolean;
  startX: number;
  scrollLeft: number;
  didDrag: boolean;
};

export default function CategoryTab({
  activeCategory,
  onChange,
}: CategoryTabProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<DragState>({
    isDragging: false,
    startX: 0,
    scrollLeft: 0,
    didDrag: false,
  });
  const [isGrabbing, setIsGrabbing] = useState(false);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const onWheel = (event: WheelEvent) => {
      if (scroller.scrollWidth <= scroller.clientWidth) return;
      if (Math.abs(event.deltaY) < Math.abs(event.deltaX)) return;

      event.preventDefault();
      scroller.scrollLeft += event.deltaY;
    };

    scroller.addEventListener("wheel", onWheel, { passive: false });
    return () => scroller.removeEventListener("wheel", onWheel);
  }, []);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    dragRef.current = {
      isDragging: true,
      startX: event.clientX,
      scrollLeft: scroller.scrollLeft,
      didDrag: false,
    };
    setIsGrabbing(true);
    scroller.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const scroller = scrollerRef.current;
    const drag = dragRef.current;
    if (!scroller || !drag.isDragging) return;

    const deltaX = event.clientX - drag.startX;
    if (Math.abs(deltaX) > 6) {
      drag.didDrag = true;
    }

    scroller.scrollLeft = drag.scrollLeft - deltaX;
  };

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const scroller = scrollerRef.current;
    if (scroller?.hasPointerCapture(event.pointerId)) {
      scroller.releasePointerCapture(event.pointerId);
    }
    dragRef.current.isDragging = false;
    setIsGrabbing(false);
  };

  const handleCategoryClick = (categoryId: MenuCategoryId) => {
    if (dragRef.current.didDrag) {
      dragRef.current.didDrag = false;
      return;
    }
    onChange(categoryId);
  };

  return (
    <div className="flex w-full justify-center">
      <div
        ref={scrollerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        className={`max-w-full overflow-x-auto overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
          isGrabbing ? "cursor-grabbing" : "cursor-grab"
        }`}
      >
        <ul
          className="flex w-max select-none items-center gap-2 px-1 md:gap-3 lg:gap-4"
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
                  onClick={() => handleCategoryClick(category.id)}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-[0.65rem] font-medium uppercase tracking-[0.16em] transition duration-300 md:px-5 md:text-xs ${
                    isActive
                      ? "bg-[#2F490C] text-white"
                      : "bg-transparent text-[#2F490C]/55 hover:text-[#2F490C]"
                  } ${isGrabbing ? "cursor-grabbing" : "cursor-pointer"}`}
                >
                  {category.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
