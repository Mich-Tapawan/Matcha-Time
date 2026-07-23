import { useEffect, useRef, useState } from "react";
import type { MenuCategoryId } from "../../types/menu";
import { menuCategories } from "../../data/menuItems";

type CategoryTabProps = {
  activeCategory: MenuCategoryId;
  onChange: (category: MenuCategoryId) => void;
};

type DragState = {
  pointerId: number | null;
  startX: number;
  scrollLeft: number;
  isDragging: boolean;
  didDrag: boolean;
};

const DRAG_THRESHOLD_PX = 8;

export default function CategoryTab({
  activeCategory,
  onChange,
}: CategoryTabProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<DragState>({
    pointerId: null,
    startX: 0,
    scrollLeft: 0,
    isDragging: false,
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
    if (!scroller || event.pointerType === "touch") return;

    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      scrollLeft: scroller.scrollLeft,
      isDragging: false,
      didDrag: false,
    };
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const scroller = scrollerRef.current;
    const drag = dragRef.current;
    if (!scroller || drag.pointerId !== event.pointerId) return;

    const deltaX = event.clientX - drag.startX;

    if (!drag.isDragging) {
      if (Math.abs(deltaX) < DRAG_THRESHOLD_PX) return;

      drag.isDragging = true;
      drag.didDrag = true;
      setIsGrabbing(true);
      scroller.setPointerCapture(event.pointerId);
    }

    scroller.scrollLeft = drag.scrollLeft - deltaX;
  };

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const scroller = scrollerRef.current;
    const drag = dragRef.current;
    if (drag.pointerId !== event.pointerId) return;

    if (scroller?.hasPointerCapture(event.pointerId)) {
      scroller.releasePointerCapture(event.pointerId);
    }

    drag.pointerId = null;
    drag.isDragging = false;
    setIsGrabbing(false);

    // Keep didDrag true through the following click, then clear on next frame
    if (drag.didDrag) {
      window.setTimeout(() => {
        drag.didDrag = false;
      }, 0);
    }
  };

  const handleCategoryClick = (categoryId: MenuCategoryId) => {
    if (dragRef.current.didDrag) return;
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
    </div>
  );
}
